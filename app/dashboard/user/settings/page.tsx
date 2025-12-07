'use client';

import { useAppSelector } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import { FaBell, FaLock, FaShieldAlt, FaPalette } from 'react-icons/fa';

export default function UserSettingsPage() {
  useAppSelector((state: RootState) => state.user);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          Settings
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your account preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Notifications */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaBell className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
              Notifications
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium text-text-light dark:text-text-dark">
                  Email Notifications
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive email updates about your reviews
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium text-text-light dark:text-text-dark">
                  Push Notifications
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get notified about comments and likes
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaLock className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
              Security
            </h2>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text-light dark:text-text-dark mb-1">
                    Change Password
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Update your password regularly for security
                  </p>
                </div>
                <FaLock className="text-gray-400" />
              </div>
            </button>
            <button className="w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text-light dark:text-text-dark mb-1">
                    Two-Factor Authentication
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add an extra layer of security
                  </p>
                </div>
                <FaShieldAlt className="text-gray-400" />
              </div>
            </button>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaPalette className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
              Appearance
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="font-medium text-text-light dark:text-text-dark mb-3">
                Theme
              </p>
              <div className="flex gap-3">
                <button className="flex-1 p-3 border-2 border-primary bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium text-primary">Light</p>
                </button>
                <button className="flex-1 p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary transition-colors">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Dark
                  </p>
                </button>
                <button className="flex-1 p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary transition-colors">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Auto
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaShieldAlt className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
              Privacy
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium text-text-light dark:text-text-dark">
                  Public Profile
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Make your profile visible to everyone
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium text-text-light dark:text-text-dark">
                  Show Email
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Display your email on your profile
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
