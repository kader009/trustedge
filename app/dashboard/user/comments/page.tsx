'use client';
import { useMemo } from 'react';
import {
  useGetUserCommentsQuery,
  useDeleteCommentMutation,
} from '@/src/redux/store/api/endApi';
import { FaComment, FaReply, FaThumbsUp, FaTrash } from 'react-icons/fa';
import { toast } from 'sonner';
import Link from 'next/link';

interface Comment {
  _id: string;
  text: string;
  review: {
    _id: string;
    title: string;
  };
  createdAt: string;
  updatedAt?: string;
}

export default function UserCommentsPage() {
  const { data: commentsData, isLoading } = useGetUserCommentsQuery(undefined);
  const [deleteComment, { isLoading: isDeleting }] =
    useDeleteCommentMutation(undefined);

  console.log(commentsData, 'Fetched comments data:', commentsData);

  const comments: Comment[] = useMemo(
    () =>
      (commentsData?.data || []).filter(
        (c: Comment) => c.review && c.review._id && c.review.title
      ),
    [commentsData?.data]
  );

  const handleDelete = async (commentId: string) => {
    if (!confirm('Are you sure you want to delete this comment?')) {
      return;
    }

    try {
      await deleteComment(commentId).unwrap();
      toast.success('Comment deleted successfully!');
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } };
      toast.error(err?.data?.message || 'Failed to delete comment');
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          My Comments
        </h1>
        <p className="text-gray-500 dark:text-gray-200">
          Comments you&apos;ve made on reviews
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaComment className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {comments.length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                Total Comments
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaReply className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-white">
                {
                  comments.filter(
                    (c) => c.updatedAt && c.updatedAt !== c.createdAt
                  ).length
                }
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                Edited Comments
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-white">
                {comments.length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                Total Comments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
            All Comments
          </h2>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-200">
            Loading comments...
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-12">
            <FaComment className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              You haven&apos;t made any comments yet
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment._id}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Link
                        href={`/reviews/${comment.review._id}`}
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        {comment.review.title}
                      </Link>
                      <span className="text-gray-400 dark:text-gray-500 text-sm">
                        •
                      </span>
                      <span className="text-gray-500 dark:text-gray-200 text-sm">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="text-gray-500 dark:text-gray-200 mb-2">
                      {comment.text}
                    </p>

                    {comment.updatedAt &&
                      comment.updatedAt !== comment.createdAt && (
                        <p className="text-gray-500 dark:text-gray-200 text-xs">
                          Edited: {new Date(comment.updatedAt).toLocaleString()}
                        </p>
                      )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDelete(comment._id)}
                      disabled={isDeleting}
                      className="px-3 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors disabled:opacity-50 cursor-pointer"
                      title="Delete comment"
                    >
                      <FaTrash />
                    </button>
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
