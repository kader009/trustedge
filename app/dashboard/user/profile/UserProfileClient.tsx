'use client';

import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import { setUser } from '@/src/redux/userAuth/userSlice';
import { FaUser, FaEnvelope, FaCalendar, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';
import EditProfileModal from '@/src/components/profile/EditProfileModal';
import { ProfileSkeleton } from '@/src/components/shared/LoadingSkeleton';

export default function UserProfileClient() {
  const { user, token } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (!user) {
    return <ProfileSkeleton />;
  }

  const handleSaveProfile = (updatedData: Partial<typeof user>) => {
    const updatedUser = { ...user, ...updatedData };
    dispatch(setUser({ user: updatedUser, token: token || '' }));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          My Profile
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your account information
        </p>
      </div>

      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-8 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image */}
          <div className="relative">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name}
                width={120}
                height={120}
                className="w-30 h-30 rounded-full object-cover border-4 border-primary"
              />
            ) : (
              <div className="w-30 h-30 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold border-4 border-primary">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
              {user.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {user.email}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize">
                {user.role}
              </span>
              <span className="px-3 py-1 bg-success/10 text-primary rounded-full text-sm font-medium capitalize">
                {user.status || 'Active'}
              </span>
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition-colors cursor-pointer"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-6">
            Personal Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <FaUser className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Full Name
                </p>
                <p className="text-sm font-medium text-text-light dark:text-text-dark">
                  {user.name}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <FaEnvelope className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Email Address
                </p>
                <p className="text-sm font-medium text-text-light dark:text-text-dark">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <FaShieldAlt className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">Role</p>
                <p className="text-sm font-medium text-text-light dark:text-text-dark capitalize">
                  {user.role}
                </p>
              </div>
            </div>
            {user.createdAt && (
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <FaCalendar className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Member Since
                  </p>
                  <p className="text-sm font-medium text-text-light dark:text-text-dark">
                    {new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-6">
            Account Settings
          </h3>
          <div className="space-y-3">
            <button className="w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <p className="font-medium text-text-light dark:text-text-dark mb-1">
                Change Password
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Update your password to keep your account secure
              </p>
            </button>
            <button className="w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <p className="font-medium text-text-light dark:text-text-dark mb-1">
                Email Preferences
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Manage your email notification settings
              </p>
            </button>
            <button className="w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <p className="font-medium text-text-light dark:text-text-dark mb-1">
                Privacy Settings
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Control who can see your profile and reviews
              </p>
            </button>
            <button className="w-full text-left p-4 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
              <p className="font-medium text-danger mb-1">Delete Account</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Permanently delete your account and all data (Only admins can perform this action)
              </p>
            </button>
          </div>
        </div>
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
