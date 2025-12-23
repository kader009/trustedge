'use client';

import { useState } from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';
import { useUpdateReviewMutation } from '@/src/redux/store/api/endApi';
import { toast } from 'sonner';

interface EditReviewModalProps {
  review: {
    _id: string;
    rating: number;
    review: string;
    productId?: {
      title?: string;
    };
  };
  onClose: () => void;
  onSuccess: () => void;
}

export default function EditReviewModal({
  review,
  onClose,
  onSuccess,
}: EditReviewModalProps) {
  const [rating, setRating] = useState(review.rating);
  const [reviewText, setReviewText] = useState(review.review);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [updateReview, { isLoading }] = useUpdateReviewMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!reviewText.trim()) {
      toast.error('Please write a review');
      return;
    }

    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }

    try {
      await updateReview({
        reviewId: review._id,
        rating,
        review: reviewText,
      }).unwrap();
      toast.success('Review updated successfully');
      onSuccess();
      onClose();
    } catch (error) {
      const err = error as { data?: { message?: string } };
      toast.error(err?.data?.message || 'Failed to update review');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-card-dark rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700 sticky top-0 bg-white dark:bg-card-dark z-10">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Edit Review
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-200 mt-1">
              {review.productId?.title || 'Product'}
            </p>
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors disabled:opacity-50"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  disabled={isLoading}
                  className="text-3xl transition-transform hover:scale-110 disabled:opacity-50"
                >
                  <FaStar
                    className={
                      star <= (hoveredRating || rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }
                  />
                </button>
              ))}
              <span className="ml-3 text-lg font-medium text-gray-700 dark:text-gray-300">
                {rating > 0 ? `${rating}/5` : 'Select rating'}
              </span>
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label
              htmlFor="review"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Review <span className="text-red-500">*</span>
            </label>
            <textarea
              id="review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              disabled={isLoading}
              maxLength={2000}
              rows={8}
              placeholder="Share your experience with this product..."
              className="w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none disabled:opacity-50"
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-500 dark:text-gray-200">
                Minimum 10 characters required
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-200">
                {reviewText.length}/2000
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Note:</strong> Your review will be re-submitted for admin
              approval after editing.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading || !reviewText.trim() || rating === 0}
              className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Updating...' : 'Update Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
