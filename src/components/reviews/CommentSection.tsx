'use client';

import { useState } from 'react';
import { useAppSelector } from '@/src/redux/hook';
import { useGetCommentsQuery } from '@/src/redux/store/api/endApi';
import CommentForm from '@/src/components/reviews/CommentForm';
import CommentItem from '@/src/components/reviews/CommentItem';
import { FaComment } from 'react-icons/fa';
import Link from 'next/link';
import { TComment } from '@/src/types/comment';
import { CommentSectionProps } from '@/src/types/commentSectionprops';

export default function CommentSection({ reviewId }: CommentSectionProps) {
  const { token } = useAppSelector((state) => state.user);
  const [page, setPage] = useState(1);

  const { data, isLoading, refetch } = useGetCommentsQuery({
    reviewId,
    page,
    limit: 10,
  });

  const comments = Array.isArray(data?.data)
    ? data.data
    : data?.data?.comments || [];
  const pagination = data?.data?.pagination || {};

  const handleCommentAdded = () => {
    refetch();
  };

  return (
    <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
      {/* Header */}
      <h3 className="text-2xl font-bold text-text-light dark:text-white mb-6 flex items-center gap-2">
        <FaComment className="text-primary" />
        Comments ({pagination.total || comments.length || 0})
      </h3>

      {/* Comment Form */}
      {token ? (
        <div className="mb-8">
          <CommentForm
            reviewId={reviewId}
            onCommentAdded={handleCommentAdded}
          />
        </div>
      ) : (
        <div className="mb-8 p-4 bg-gray-100 dark:bg-card-dark rounded-lg text-center">
          <p className="text-text-light dark:text-white">
            Please{' '}
            <Link href="/login" className="text-primary hover:underline">
              login
            </Link>{' '}
            to comment
          </p>
        </div>
      )}

      {/* Comments List */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse flex gap-4">
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : comments.length > 0 ? (
        <>
          <div className="space-y-4">
            {comments.map((comment: TComment) => (
              <CommentItem
                key={comment._id}
                comment={comment}
                onDeleted={refetch}
                onUpdated={refetch}
              />
            ))}
          </div>

          {/* Load More */}
          {pagination.page < pagination.totalPages && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setPage(page + 1)}
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-white cursor-pointer font-semibold rounded-lg transition-colors"
              >
                Load More comments
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <FaComment className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">
            No comments yet. Be the first to comment!
          </p>
        </div>
      )}
    </div>
  );
}
