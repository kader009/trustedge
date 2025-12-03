'use client';

import { useAppSelector } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import { FaStar, FaCalendar, FaEye } from 'react-icons/fa';

export default function UserReviewsPage() {
  const { user } = useAppSelector((state: RootState) => state.user);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          My Reviews
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage all your product reviews
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-lg text-white">
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
              <FaEye className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Views
              </p>
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
                0.0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Avg Rating
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
          <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            Write New Review
          </button>
        </div>

        <div className="text-center py-12">
          <FaStar className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            You haven&apos;t written any reviews yet
          </p>
          <a
            href="/create-review"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Write Your First Review
          </a>
        </div>
      </div>
    </div>
  );
}
