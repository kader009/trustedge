'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaCheck, FaTimes, FaUser } from 'react-icons/fa';
import {
  useApproveReviewMutation,
  useRejectReviewMutation,
} from '@/src/redux/store/api/endApi';
import { toast } from 'sonner';
import RejectReasonModal from './RejectReasonModal';

interface ReviewApprovalCardProps {
  review: {
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
  };
}

export default function ReviewApprovalCard({
  review,
}: ReviewApprovalCardProps) {
  const [approveReview, { isLoading: isApproving }] =
    useApproveReviewMutation(undefined);
  const [rejectReview, { isLoading: isRejecting }] = useRejectReviewMutation(undefined);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleApprove = async () => {
    try {
      await approveReview(review._id).unwrap();
      toast.success('Review approved successfully');
    } catch (error) {
      const err = error as { data?: { message?: string } };
      toast.error(err?.data?.message || 'Failed to approve review');
    }
  };

  const handleReject = async (reason: string) => {
    try {
      await rejectReview({ reviewId: review._id, reason }).unwrap();
      toast.success('Review rejected');
      setShowRejectModal(false);
    } catch (error) {
      const err = error as { data?: { message?: string } };
      toast.error(err?.data?.message || 'Failed to reject review');
    }
  };

  const getReviewImage = () => {
    if (review.images && review.images.length > 0) {
      return review.images[0];
    }
    return 'https://via.placeholder.com/200x150/6366f1/ffffff?text=No+Image';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
        <div className="flex gap-4">
          <div className="relative w-32 h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900 shrink-0">
            <Image
              src={getReviewImage()}
              alt={review.title || 'Review Image'}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
              {review.title || 'Untitled Review'}
            </h3>

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
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {review.rating}/5
              </span>
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
              {review.description}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              {review.user?.avatar || review.user?.image ? (
                <Image
                  src={review.user.avatar || review.user.image || ''}
                  alt={review.user.name || 'User'}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <FaUser className="text-gray-500 text-xs" />
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {review.user?.name || 'Anonymous User'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {review.user?.email || 'No email provided'}
                </p>
              </div>
            </div>

            {/* Timestamp */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Submitted: {formatDate(review.createdAt)}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleApprove}
                disabled={isApproving || isRejecting}
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-green-500 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaCheck className="text-sm" />
                {isApproving ? 'Approving...' : 'Approve'}
              </button>
              <button
                onClick={() => setShowRejectModal(true)}
                disabled={isApproving || isRejecting}
                className="flex items-center gap-2 px-4 py-2 bg-red-400 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaTimes className="text-sm" />
                {isRejecting ? 'Rejecting...' : 'Reject'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <RejectReasonModal
          onConfirm={handleReject}
          onCancel={() => setShowRejectModal(false)}
          isLoading={isRejecting}
        />
      )}
    </>
  );
}
