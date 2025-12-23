'use client';

import { FaTimes, FaExclamationTriangle } from 'react-icons/fa';
import { useDeleteReviewMutation } from '@/src/redux/store/api/endApi';
import { toast } from 'sonner';

interface DeleteConfirmModalProps {
  reviewId: string;
  productTitle: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DeleteConfirmModal({
  reviewId,
  productTitle,
  onClose,
  onSuccess,
}: DeleteConfirmModalProps) {
  const [deleteReview, { isLoading }] = useDeleteReviewMutation();

  const handleDelete = async () => {
    try {
      await deleteReview(reviewId).unwrap();
      toast.success('Review deleted successfully');
      onSuccess();
      onClose();
    } catch (error) {
      const err = error as { data?: { message?: string } };
      toast.error(err?.data?.message || 'Failed to delete review');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-card-dark rounded-xl shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Delete Review
          </h3>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors disabled:opacity-50"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full shrink-0">
              <FaExclamationTriangle className="text-red-600 dark:text-red-400 text-xl" />
            </div>
            <div>
              <p className="text-gray-900 dark:text-white font-medium mb-2">
                Are you sure you want to delete this review?
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200 mb-3">
                Review for: <span className="font-medium">{productTitle}</span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                This action cannot be undone. The review will be permanently
                removed from the system.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={isLoading}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isLoading ? 'Deleting...' : 'Delete Review'}
          </button>
        </div>
      </div>
    </div>
  );
}
