'use client';

import { FaTimes, FaExclamationTriangle } from 'react-icons/fa';
import { useDeleteUserMutation } from '@/src/redux/store/api/endApi';
import { toast } from 'sonner';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface DeleteUserModalProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteUserModal({
  user,
  isOpen,
  onClose,
}: DeleteUserModalProps) {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      const response = await deleteUser(user._id).unwrap();
      toast.success(response.message || 'User deleted successfully!');
      onClose();
    } catch (error) {
      const err = error as { data?: { message?: string } };
      toast.error(err.data?.message || 'Failed to delete user');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          disabled={isLoading}
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Warning Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
            <FaExclamationTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 text-center">
          Delete User?
        </h2>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
          Are you sure you want to delete{' '}
          <span className="font-semibold text-text-light dark:text-text-dark">
            {user.name}
          </span>
          ? This action cannot be undone.
        </p>

        {/* User Details */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Email:</span>
              <span className="font-medium text-text-light dark:text-text-dark">
                {user.email}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Role:</span>
              <span className="font-medium text-text-light dark:text-text-dark capitalize">
                {user.role}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 px-4 py-2 border border-border-light dark:border-border-dark rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={isLoading}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Deleting...' : 'Delete User'}
          </button>
        </div>
      </div>
    </div>
  );
}
