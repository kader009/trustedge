'use client';

import {
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
} from 'react-icons/fa';

export default function PendingReviewsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          Pending Reviews
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Reviews awaiting approval
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
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
                Approved Today
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-500 p-3 rounded-lg text-white">
              <FaTimesCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Rejected Today
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 p-3 rounded-lg text-white">
              <FaHourglassHalf className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Avg. Review Time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Reviews List */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
            Reviews Awaiting Approval
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-success text-white rounded-lg hover:bg-success/90 transition-colors text-sm">
              Approve All
            </button>
          </div>
        </div>

        <div className="text-center py-12">
          <FaClock className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            No pending reviews
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            All reviews have been processed
          </p>
        </div>
      </div>
    </div>
  );
}
