'use client';
import { useState } from 'react';
import { FaStar, FaCheckCircle, FaClock } from 'react-icons/fa';
import {
  useGetallReviewQuery,
  useGetPendingReviewsQuery,
} from '@/src/redux/store/api/endApi';
import Image from 'next/image';

interface Review {
  _id: string;
  title: string;
  description: string;
  rating: number;
  status: 'pending' | 'approved' | 'rejected';
  images?: string[];
  user?: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    avatar?: string;
  };
  productId?: {
    _id: string;
    name: string;
    image?: string;
  };
  userId?: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    avatar?: string;
  };
  createdAt: string;
}

export default function AdminReviewsPage() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');
  const { data: reviewsData, isLoading: isLoadingAll } =
    useGetallReviewQuery(undefined);
  const { data: pendingData, isLoading: isLoadingPending } =
    useGetPendingReviewsQuery(undefined);
  console.log(reviewsData?.images?.[0]);

  const allReviews: Review[] =
    (reviewsData?.data?.reviews as Review[]) ||
    (reviewsData?.reviews as Review[]) ||
    (Array.isArray(reviewsData?.data) ? (reviewsData.data as Review[]) : []) ||
    [];

  const pendingReviewsList: Review[] =
    (pendingData?.data?.reviews as Review[]) ||
    (pendingData?.reviews as Review[]) ||
    (Array.isArray(pendingData?.data) ? (pendingData.data as Review[]) : []) ||
    [];

  // Merge and normalize statuses (Aggressive Normalization)
  const normalizedReviews: Review[] = [];

  // Combine both lists
  const rawReviews = [...allReviews];
  pendingReviewsList.forEach((pr) => {
    if (!rawReviews.find((r) => r._id === pr._id)) {
      rawReviews.push(pr);
    }
  });

  rawReviews.forEach((r) => {
    const rawStatus = (r.status || '').toString().toLowerCase().trim();
    let finalStatus: 'pending' | 'approved' | 'rejected' = 'approved'; // Default

    if (rawStatus === 'pending') {
      finalStatus = 'pending';
    } else if (rawStatus === 'rejected') {
      finalStatus = 'rejected';
    } else {
      finalStatus = 'approved';
    }

    normalizedReviews.push({
      ...r,
      status: finalStatus,
    });
  });

  const reviews = normalizedReviews;

  const isLoading = isLoadingAll || isLoadingPending;

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
        <p className="text-gray-500 dark:text-gray-200">
          Manage all product reviews
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaStar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {totalReviews}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                Total Reviews
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaCheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {approvedCount}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                Approved
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaClock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {pendingCount}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                Pending
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark whitespace-nowrap">
            All Reviews
          </h2>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg transition-colors text-center ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-card-dark text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg transition-colors text-center ${
                filter === 'pending'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-card-dark text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg transition-colors text-center ${
                filter === 'approved'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-card-dark text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Approved
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-200">
            Loading reviews...
          </div>
        ) : filteredReviews.length === 0 ? (
          <div className="text-center py-12">
            <FaStar className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-200 mb-4">
              No reviews available
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-200">
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
                  {(review.images?.[0] || review.productId?.image) && (
                    <div className="relative w-24 h-24 shrink-0">
                      <Image
                        src={(() => {
                          const img =
                            review.images?.[0] || review.productId?.image || '';
                          // If the image is an ibb.co.com share link, try to convert to i.ibb.co direct link
                          if (img.includes('ibb.co.com')) {
                            // Extract image ID
                            const id = img.split('/').pop();
                            // Fallback to png extension
                            return `https://i.ibb.co/${id}/image.png`;
                          }
                          return img;
                        })()}
                        alt={review.title || review.productId?.name || 'Review'}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-2">
                      <div className="min-w-0 w-full">
                        <h3 className="font-semibold text-text-light dark:text-text-dark text-lg truncate">
                          {review.title ||
                            review.productId?.name ||
                            'Untitled Review'}
                        </h3>
                        <div className="flex flex-col">
                          <p className="text-sm font-medium text-primary">
                            {review.user?.name ||
                              review.userId?.name ||
                              'Unknown User'}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-200">
                            {review.user?.email ||
                              review.userId?.email ||
                              'No email'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400'
                                : 'text-gray-500 dark:text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-200 mb-3 line-clamp-2">
                      {review.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-200">
                        <span>
                          {isNaN(new Date(review.createdAt).getTime())
                            ? '21/12/25'
                            : new Date(review.createdAt).toLocaleDateString()}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full capitalize ${
                            review.status === 'approved'
                              ? 'bg-green-100 dark:bg-card-dark text-green-600 dark:text-green-400'
                              : review.status === 'pending'
                              ? 'bg-yellow-100 dark:bg-card-dark text-yellow-600 dark:text-yellow-400'
                              : 'bg-red-100 dark:bg-card-dark text-red-600 dark:text-red-400'
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
