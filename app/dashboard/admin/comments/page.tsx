'use client';
import { useState } from 'react';
import {
  useGetAllCommentsQuery,
  useHardDeleteCommentMutation,
} from '@/src/redux/store/api/endApi';
import { toast } from 'sonner';
import { FaTrash, FaComment, FaUser, FaClock, FaSearch } from 'react-icons/fa';
import Image from 'next/image';

interface Comment {
  _id: string;
  text: string;
  image: string;
  content: string;
  reviewId: string;
  user: {
    _id: string;
    image: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt?: string;
}

export default function CommentModerationPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: commentsData, isLoading } = useGetAllCommentsQuery({
    page: 1,
    limit: 50,
  });

  const [hardDeleteComment, { isLoading: isDeleting }] =
    useHardDeleteCommentMutation(undefined);

  const comments: Comment[] = commentsData?.data || [];

  const filteredComments = comments.filter(
    (comment) =>
      (comment.content || '')
        .toLowerCase()
        .includes((searchTerm || '').toLowerCase()) ||
      (comment.user?.name || '')
        .toLowerCase()
        .includes((searchTerm || '').toLowerCase())
  );

  const handleDelete = (commentId: string, content: string) => {
    toast(
      `Delete comment: "${content.substring(0, 100)}${
        content.length > 100 ? '...' : ''
      }"?`,
      {
        action: {
          label: 'Delete',
          onClick: async () => {
            try {
              await hardDeleteComment(commentId).unwrap();
              toast.success('Comment deleted successfully!');
            } catch (error: unknown) {
              const err = error as { data?: { message?: string } };
              toast.error(err?.data?.message || 'Failed to delete comment');
            }
          },
        },
        cancel: {
          label: 'Cancel',
          onClick: () => {},
        },
      }
    );
  };

  return (
    <div className="flex flex-1 flex-col px-1 py-2">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1 py-2">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            All Comment Moderation
          </p>
          <p className="text-text-light dark:text-white text-base font-normal leading-normal">
            Review and moderate user comments across all reviews.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-1 py-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-primary/50"
            placeholder="Search comments by content or author..."
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-1 py-2">
        <div className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <FaComment className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-200 text-sm">
                Total Comments
              </p>
              <p className="text-2xl font-bold text-gray-500 dark:text-white">
                {comments.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <FaUser className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-200 text-sm">
                Unique Users
              </p>
              <p className="text-2xl font-bold text-gray-500 dark:text-white">
                {new Set(comments.map((c) => c.user?._id)).size}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <FaClock className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Recent (24h)
              </p>
              <p className="text-2xl font-bold text-gray-500 dark:text-white">
                {(() => {
                  const oneDayAgo = new Date().getTime() - 24 * 60 * 60 * 1000;
                  return comments.filter(
                    (c) => new Date(c.createdAt).getTime() > oneDayAgo
                  ).length;
                })()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="px-1 py-2">
        {isLoading ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-200">
            Loading comments...
          </div>
        ) : filteredComments.length === 0 ? (
          <div className="text-center py-12">
            <FaComment className="mx-auto text-4xl text-gray-500 dark:text-gray-200 mb-4" />
            <p className="text-gray-500 dark:text-gray-200 text-lg">
              {searchTerm
                ? 'No comments found matching your search'
                : 'No comments to moderate'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredComments.map((comment) => (
              <div
                key={comment._id}
                className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Image
                          src={comment.user?.image}
                          alt={comment.user?.name}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-white font-bold">
                          {comment.user?.name || 'Unknown User'}
                        </p>
                        <p className="text-gray-500 dark:text-gray-200 text-sm">
                          {comment.user?.email || 'No email'}
                        </p>
                      </div>
                      <span className="ml-auto text-gray-500 dark:text-gray-200 text-sm">
                        {new Date(comment.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-4 mb-3">
                      <p className="text-gray-500 dark:text-white">
                        {comment?.text}
                      </p>
                    </div>

                    {comment.updatedAt &&
                      comment.updatedAt !== comment.createdAt && (
                        <p className="text-gray-500 dark:text-gray-200 text-xs">
                          Edited: {new Date(comment.updatedAt).toLocaleString()}
                        </p>
                      )}
                  </div>

                  <button
                    onClick={() => handleDelete(comment._id, comment.content)}
                    disabled={isDeleting}
                    className="flex items-center gap-2 px-4 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
