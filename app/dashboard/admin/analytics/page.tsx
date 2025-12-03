'use client';

import { FaChartLine, FaUsers, FaStar, FaEye } from 'react-icons/fa';

export default function AdminAnalyticsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          Analytics
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Platform statistics and insights
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-lg text-white">
              <FaUsers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Users
              </p>
              <p className="text-xs text-green-500 font-semibold">+12%</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 p-3 rounded-lg text-white">
              <FaStar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Reviews
              </p>
              <p className="text-xs text-green-500 font-semibold">+8%</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded-lg text-white">
              <FaChartLine className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Active Today
              </p>
              <p className="text-xs text-green-500 font-semibold">+23%</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-500 p-3 rounded-lg text-white">
              <FaEye className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Page Views
              </p>
              <p className="text-xs text-green-500 font-semibold">+15%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-6">
            User Growth
          </h2>
          <div className="text-center py-12">
            <FaChartLine className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Chart will be displayed here
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-6">
            Review Trends
          </h2>
          <div className="text-center py-12">
            <FaStar className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Chart will be displayed here
            </p>
          </div>
        </div>
      </div>

      {/* Top Content */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
        <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-6">
          Top Performing Reviews
        </h2>
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No data available yet
          </p>
        </div>
      </div>
    </div>
  );
}
