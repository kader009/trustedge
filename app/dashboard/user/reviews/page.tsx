'use client';

import { useState } from 'react';
import {
  FaStar,
  FaEye,
  FaEdit,
  FaTrash,
  FaSpinner,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';
import { useGetUserReviewsQuery } from '@/src/redux/store/api/endApi';
import EditReviewModal from '@/src/components/user/EditReviewModal';
import DeleteConfirmModal from '@/src/components/user/DeleteConfirmModal';
import Link from 'next/link';
import Image from 'next/image';
import { ReviewType } from '@/src/types/reviewType';
import { Review } from '@/src/types/reviews';
import {
  StatsSkeleton,
  ListSkeleton,
} from '@/src/components/skeletons/CommonSkeletons';

export default function UserReviewsPage() {
  const { data, isLoading, error, refetch } = useGetUserReviewsQuery(undefined);

  const [editingReview, setEditingReview] = useState<ReviewType | null>(null);
  const [deletingReview, setDeletingReview] = useState<ReviewType | null>(null);
  const reviews = data?.reviews || [];
  const stats = data?.stats || {
    total: 0,
    totalViews: 0,
    avgRating: 0,
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
      case 'published':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
            <FaCheckCircle className="text-xs" />
            Published
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300">
            <FaClock className="text-xs" />
            Pending
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
            <FaTimesCircle className="text-xs" />
            Rejected
          </span>
        );
      default:
        return null;
    }
  };

  const getProductImage = (images?: string[]) => {
    if (images && images.length > 0) {
      return images[0];
    }
    return 'https://via.placeholder.com/100x75/6366f1/ffffff?text=No+Image';
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          My Reviews
        </h1>
        <p className="text-gray-500 dark:text-gray-200">
          Manage all your product reviews
        </p>
      </div>

      {/* Stats Overview */}
      {isLoading ? (
        <StatsSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary p-3 rounded-lg text-white">
                <FaStar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                  {stats.total || reviews.length}
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
                <FaEye className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                  {stats.totalViews || 0}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  Total Views
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary p-3 rounded-lg text-white">
                <FaStar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                  {(stats.avgRating || 0).toFixed(1)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  Avg Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark w-full sm:w-auto text-left">
            All Reviews
          </h2>
          <Link href="/create-review" className="w-full sm:w-auto">
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer w-full sm:w-auto">
              Write New Review
            </button>
          </Link>
        </div>

        {isLoading ? (
          <ListSkeleton count={3} />
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-2">Failed to load reviews</p>
            <p className="text-sm text-gray-400 dark:text-gray-200">
              Please try again later
            </p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-12">
            <FaStar className="w-16 h-16 text-gray-300 dark:text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-200 mb-4">
              You haven&apos;t written any reviews yet
            </p>
            <Link href="/create-review">
              <button className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors cursor-pointer">
                Write Your First Review
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review: Review) => (
              <div
                key={review._id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="relative w-24 h-18 rounded-lg overflow-hidden bg-white dark:bg-card-dark shrink-0">
                    <Image
                      src={getProductImage(review.productId?.images)}
                      alt={review.productId?.title || 'Product'}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-2">
                      <div className="min-w-0 w-full">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
                          {review.productId?.title || 'Untitled Product'}
                        </h3>
                        {getStatusBadge(review.status)}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {review.status === 'pending' && (
                          <>
                            <button
                              onClick={() => setEditingReview(review)}
                              className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors cursor-pointer"
                              title="Edit"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => setDeletingReview(review)}
                              className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors cursor-pointer"
                              title="Delete"
                            >
                              <FaTrash />
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm ${
                              i < review.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-200">
                        {review.rating}/5
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-sm text-gray-500 dark:text-gray-200 line-clamp-2 mb-3 break-words">
                      {review.review}
                    </p>

                    {/* Admin Feedback (if rejected) */}
                    {review.status === 'rejected' && review.adminFeedback && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 mb-3 break-words">
                        <p className="text-sm font-medium text-red-800 dark:text-red-300 mb-1">
                          Rejection Reason:
                        </p>
                        <p className="text-sm text-red-700 dark:text-red-400">
                          {review.adminFeedback}
                        </p>
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-200">
                      <span>
                        {new Date(review.createdAt).toLocaleDateString(
                          'en-US',
                          {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          }
                        )}
                      </span>
                      {review.views && <span>• {review.views} views</span>}
                      {review.likes && <span>• {review.likes} votes</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      {editingReview && (
        <EditReviewModal
          review={editingReview}
          onClose={() => setEditingReview(null)}
          onSuccess={() => refetch()}
        />
      )}
      {deletingReview && (
        <DeleteConfirmModal
          reviewId={deletingReview._id}
          productTitle={deletingReview.productId?.title || 'this product'}
          onClose={() => setDeletingReview(null)}
          onSuccess={() => refetch()}
        />
      )}
    </div>
  );
}
