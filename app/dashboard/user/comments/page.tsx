'use client';
import { useMemo, useState } from 'react';
import {
  useGetUserCommentsQuery,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} from '@/src/redux/store/api/endApi';
import {
  FaComment,
  FaReply,
  FaThumbsUp,
  FaTrash,
  FaEdit,
  FaCheck,
  FaTimes,
} from 'react-icons/fa';
import { toast } from 'sonner';
import Link from 'next/link';
import { useAppSelector } from '@/src/redux/hook';
import Image from 'next/image';
import UserCommentSkeleton from '@/src/components/skeletons/UserCommentSkeleton';
import { Comment } from '@/src/types/userComment';

export default function UserCommentsPage() {
  const { user } = useAppSelector((state) => state.user);
  const { data: commentsData, isLoading } = useGetUserCommentsQuery(undefined);
  const [deleteComment, { isLoading: isDeleting }] =
    useDeleteCommentMutation(undefined);
  const [updateComment, { isLoading: isUpdating }] =
    useUpdateCommentMutation(undefined);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const comments: Comment[] = useMemo(
    () =>
      (commentsData?.data || []).filter(
        (c: Comment) => c.review && c.review._id && c.review.title,
      ),
    [commentsData?.data],
  );

  const handleDelete = (commentId: string) => {
    toast('Are you sure you want to delete this comment?', {
      action: {
        label: 'Yes',
        onClick: async () => {
          try {
            await deleteComment(commentId).unwrap();
            toast.success('Comment deleted successfully!');
          } catch (error: unknown) {
            const err = error as { data?: { message?: string } };
            toast.error(err?.data?.message || 'Failed to delete comment');
          }
        },
      },
      cancel: {
        label: 'Cancel',
        onClick: () => console.log('Delete cancelled'),
      },
    });
  };

  const startEdit = (comment: Comment) => {
    setEditingId(comment._id);
    setEditText(comment.text);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const handleUpdate = async (commentId: string) => {
    if (!editText.trim()) {
      toast.error('Comment cannot be empty');
      return;
    }

    try {
      await updateComment({ commentId, content: editText }).unwrap();
      toast.success('Comment updated successfully!');
      setEditingId(null);
      setEditText('');
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } };
      toast.error(err?.data?.message || 'Failed to update comment');
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
                    (c) => c.updatedAt && c.updatedAt !== c.createdAt,
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
          <UserCommentSkeleton />
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
                className="border border-gray-200 dark:border-border-dark rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                {/* User Info Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-border-dark">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-text-light dark:text-white">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {user?.email}
                    </p>
                  </div>
                </div>

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

                    {editingId === comment._id ? (
                      <div className="mt-2">
                        <textarea
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full p-3 bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-light dark:text-text-dark"
                          rows={3}
                          autoFocus
                        />
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => handleUpdate(comment._id)}
                            disabled={isUpdating}
                            className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white rounded-md text-sm hover:bg-primary/90 disabled:opacity-50"
                          >
                            <FaCheck size={12} /> Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            disabled={isUpdating}
                            className="flex items-center gap-1 px-3 py-1.5 bg-gray-200 dark:bg-card-dark text-gray-700 dark:text-gray-300 rounded-md text-sm hover:bg-gray-300 dark:hover:bg-gray-600 dark:border-gray-700"
                          >
                            <FaTimes size={12} /> Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-gray-500 dark:text-gray-200 mb-2 whitespace-pre-wrap">
                          {comment.text}
                        </p>
                        {comment.updatedAt &&
                          comment.updatedAt !== comment.createdAt && (
                            <p className="text-gray-500 dark:text-gray-200 text-xs">
                              Edited:{' '}
                              {new Date(comment.updatedAt).toLocaleString()}
                            </p>
                          )}
                      </>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {editingId !== comment._id && (
                      <>
                        <button
                          onClick={() => startEdit(comment)}
                          className="px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer"
                          title="Edit comment"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(comment._id)}
                          disabled={isDeleting}
                          className="px-3 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors disabled:opacity-50 cursor-pointer"
                          title="Delete comment"
                        >
                          <FaTrash />
                        </button>
                      </>
                    )}
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
