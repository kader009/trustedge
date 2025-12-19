'use client';
import { useState } from 'react';
import {
  FaStar,
  FaCheckCircle,
  FaClock
} from 'react-icons/fa';
import { useGetallReviewQuery } from '@/src/redux/store/api/endApi';
import Image from 'next/image';

interface Review {
  _id: string;
  title: string;
  description: string;
  rating: number;
  status: 'pending' | 'approved' | 'rejected';
  productId: {
    _id: string;
    name: string;
    image?: string;
  };
  userId: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
}

export default function AdminReviewsPage() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');
  const { data: reviewsData, isLoading } = useGetallReviewQuery(undefined);

  const reviews: Review[] = reviewsData?.data || [];

  const filteredReviews = reviews.filter((review) => {
    if (filter === 'all') return true;
    return review.status === filter;
  });

  const totalReviews = reviews.length;
  const approvedCount = reviews.filter((r) => r.status === 'approved').length;
  const pendingCount = reviews.filter((r) => r.status === 'pending').length;
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
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaStar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {totalReviews}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Reviews
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
                {approvedCount}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Approved
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaClock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {pendingCount}
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
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'pending'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'approved'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Approved
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            Loading reviews...
          </div>
        ) : filteredReviews.length === 0 ? (
          <div className="text-center py-12">
            <FaStar className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              No reviews available
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Reviews will appear here once users start submitting them
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReviews.map((review) => (
              <div
                key={review._id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  {review.productId?.image && (
                    <div className="relative w-20 h-20 shrink-0">
                      <Image
                        src={review.productId.image}
                        alt={review.productId.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-text-light dark:text-text-dark">
                          {review.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {review.productId?.name || 'Unknown Product'}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                      {review.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span>By {review.userId?.name || 'Unknown'}</span>
                        <span>
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full ${
                            review.status === 'approved'
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                              : review.status === 'pending'
                              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                              : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                          }`}
                        >
                          {review.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
