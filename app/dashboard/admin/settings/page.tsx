'use client';

import { FaShieldAlt, FaServer, FaEnvelope, FaDatabase } from 'react-icons/fa';

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          Admin Settings
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Configure platform settings
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Platform Settings */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaServer className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
              Platform Settings
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <label className="block mb-2">
                <span className="font-medium text-text-light dark:text-text-dark">
                  Site Name
                </span>
                <input
                  type="text"
                  defaultValue="ReviewPortal"
                  className="mt-2 w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-lg bg-white dark:bg-gray-900 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <label className="block mb-2">
                <span className="font-medium text-text-light dark:text-text-dark">
                  Site Description
                </span>
                <textarea
                  defaultValue="Get reviews from the community for your products"
                  rows={3}
                  className="mt-2 w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-lg bg-white dark:bg-gray-900 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium text-text-light dark:text-text-dark">
                  Maintenance Mode
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Put the site in maintenance mode
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Review Settings */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaShieldAlt className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
              Review Moderation
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium text-text-light dark:text-text-dark">
                  Auto-Approve Reviews
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automatically approve all new reviews
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium text-text-light dark:text-text-dark">
                  Require Email Verification
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Users must verify email before posting
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

        {/* Email Settings */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaEnvelope className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
              Email Configuration
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <label className="block mb-2">
                <span className="font-medium text-text-light dark:text-text-dark">
                  SMTP Host
                </span>
                <input
                  type="text"
                  placeholder="smtp.example.com"
                  className="mt-2 w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-lg bg-white dark:bg-gray-900 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <label className="block mb-2">
                  <span className="font-medium text-text-light dark:text-text-dark">
                    SMTP Port
                  </span>
                  <input
                    type="text"
                    placeholder="587"
                    className="mt-2 w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-lg bg-white dark:bg-gray-900 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </label>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <label className="block mb-2">
                  <span className="font-medium text-text-light dark:text-text-dark">
                    From Email
                  </span>
                  <input
                    type="email"
                    placeholder="noreply@example.com"
                    className="mt-2 w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-lg bg-white dark:bg-gray-900 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaDatabase className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
              System Information
            </h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Database Status
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                API Status
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Storage Used
              </span>
              <span className="text-sm font-medium text-text-light dark:text-text-dark">
                0 MB / 1 GB
              </span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-4">
          <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">
            Reset Changes
          </button>
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
