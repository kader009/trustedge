'use client';

import {
  FaUsers,
  FaUserPlus,
  FaUserCheck,
  FaSearch,
  FaEdit,
  FaTrash,
  FaUser,
} from 'react-icons/fa';
import { useState, useMemo } from 'react';
import { useGetAllUsersQuery } from '@/src/redux/store/api/endApi';
import { useAppSelector } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import { toast } from 'sonner';
import Image from 'next/image';
import EditUserModal from '@/src/components/admin/EditUserModal';
import DeleteUserModal from '@/src/components/admin/DeleteUserModal';

interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { user: currentUser } = useAppSelector(
    (state: RootState) => state.user
  );

  const { data: usersData, isLoading } = useGetAllUsersQuery(undefined);

  const users = useMemo(() => {
    return (usersData?.data as User[]) || [];
  }, [usersData]);

  // Filter and search logic
  const filteredUsers = useMemo(() => {
    return users.filter((user: User) => {
      const matchesSearch =
        user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRole =
        roleFilter === 'all' || user.role === roleFilter.toLowerCase();
      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'active' && user.isActive) ||
        (statusFilter === 'inactive' && !user.isActive);

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchQuery, roleFilter, statusFilter]);

  const totalUsers = users.length;
  const activeUsers = users.filter((u: User) => u.isActive).length;
  const newThisWeek = users.filter((u: User) => {
    const createdDate = new Date(u.createdAt);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return createdDate >= weekAgo;
  }).length;

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (user: User) => {
    // Prevent deleting self
    if (currentUser && user._id === currentUser._id) {
      toast.error('You cannot delete your own account');
      return;
    }

    // Prevent deleting other admins
    if (user.role === 'admin') {
      toast.error('Admin users cannot be deleted');
      return;
    }

    // Show confirmation toast
    toast(
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Delete User?</p>
        <p className="text-sm text-gray-600">
          Are you sure you want to delete {user.name}?
        </p>
      </div>,
      {
        action: {
          label: 'Yes, Delete',
          onClick: () => {
            setSelectedUser(user);
            setIsDeleteModalOpen(true);
          },
        },
        cancel: {
          label: 'Cancel',
          onClick: () => {},
        },
      }
    );
  };

  const handleCloseModals = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          User Management
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          Manage all registered users
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaUsers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {isLoading ? '...' : totalUsers}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                Total Users
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaUserCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {isLoading ? '...' : activeUsers}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                Active Users
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaUserPlus className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {isLoading ? '...' : newThisWeek}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                New This Week
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border-light dark:border-border-dark rounded-lg bg-white dark:bg-card-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 border border-border-light dark:border-border-dark rounded-lg bg-white dark:bg-card-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-border-light dark:border-border-dark rounded-lg bg-white dark:bg-card-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Users List */}
      <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-gray-500 dark:text-gray-200 mt-4">
              Loading users...
            </p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center py-12">
            <FaUsers className="w-16 h-16 text-gray-500 dark:text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-200 mb-4">
              No users found
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-200">
              {searchQuery || roleFilter !== 'all' || statusFilter !== 'all'
                ? 'Try adjusting your filters'
                : 'Users will appear here once they register'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-light dark:border-border-dark">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-200">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-200">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-200">
                    Role
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-200">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-200">
                    Joined
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-200">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user: User) => (
                  <tr
                    key={user._id}
                    className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        {user.image ? (
                          <Image
                            src={user.image}
                            alt={user.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <FaUser className="text-primary" />
                          </div>
                        )}
                        <span className="font-medium text-text-light dark:text-text-dark">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-200">
                      {user.email}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          user.role === 'admin'
                            ? 'bg-purple-100 text-primary dark:bg-purple-900 dark:text-purple-300'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          user.isActive
                            ? 'bg-green-100 text-primary dark:bg-primary dark:text-green-300'
                            : 'bg-gray-100 text-primary dark:bg-primary dark:text-gray-300'
                        }`}
                      >
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEditClick(user)}
                          className="p-2 text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors cursor-pointer"
                          title="Edit user"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(user)}
                          className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors cursor-pointer"
                          title="Delete user"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modals */}
      {selectedUser && (
        <>
          <EditUserModal
            user={selectedUser}
            isOpen={isEditModalOpen}
            onClose={handleCloseModals}
          />
          <DeleteUserModal
            user={selectedUser}
            isOpen={isDeleteModalOpen}
            onClose={handleCloseModals}
          />
        </>
      )}
    </div>
  );
}
