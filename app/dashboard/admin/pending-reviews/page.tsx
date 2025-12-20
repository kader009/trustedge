'use client';

import {
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
} from 'react-icons/fa';
import { useGetPendingReviewsQuery } from '@/src/redux/store/api/endApi';
import ReviewApprovalCard from '@/src/components/admin/ReviewApprovalCard';

interface Review {
  _id: string;
  title: string;
  description: string;
  images?: string[];
  category?: string;
  user: {
    _id: string;
    name: string;
    email: string;
    avatar?: string;
    image?: string;
  };
  rating: number;
  createdAt: string;
}

export default function PendingReviewsPage() {
  const { data, isLoading, error } = useGetPendingReviewsQuery(undefined);

  const pendingReviews =
    (data?.data?.reviews as Review[]) ||
    (data?.reviews as Review[]) ||
    (Array.isArray(data?.data) ? (data.data as Review[]) : []) ||
    [];

  const stats = {
    pending:
      data?.data?.stats?.pending ??
      data?.stats?.pending ??
      pendingReviews.length,
    approvedToday:
      data?.data?.stats?.approvedToday ?? data?.stats?.approvedToday ?? 0,
    rejectedToday:
      data?.data?.stats?.rejectedToday ?? data?.stats?.rejectedToday ?? 0,
  };

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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaClock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {isLoading ? '...' : stats.pending || pendingReviews.length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pending
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaCheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {isLoading ? '...' : stats.approvedToday || 0}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Approved Today
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaTimesCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {isLoading ? '...' : stats.rejectedToday || 0}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Rejected Today
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
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <FaSpinner className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
            <p className="text-gray-500 dark:text-gray-400">
              Loading reviews...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-2">Failed to load pending reviews</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Please try again later
            </p>
          </div>
        ) : pendingReviews.length === 0 ? (
          <div className="text-center py-12">
            <FaClock className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              No pending reviews
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              All reviews have been processed
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {pendingReviews.map((review: Review) => (
              <ReviewApprovalCard key={review._id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
