'use client';

import { FaStar, FaCheckCircle, FaClock, FaChartBar } from 'react-icons/fa';

export default function AdminReviewsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          Review Management
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage all product reviews
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
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
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded-lg text-white">
              <FaCheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Approved
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-lg text-white">
              <FaClock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pending
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
            All Reviews
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              All
            </button>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Pending
            </button>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Approved
            </button>
          </div>
        </div>

        <div className="text-center py-12">
          <FaStar className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            No reviews available
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Reviews will appear here once users start submitting them
          </p>
        </div>
      </div>
    </div>
  );
}
