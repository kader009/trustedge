'use client';
import { useState } from 'react';
import { useAppSelector } from '@/src/redux/hook';
import {
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  usePostCommentMutation,
  useGetRepliesQuery,
} from '@/src/redux/store/api/endApi';
import {
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaUser,
  FaReply,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { toast } from 'sonner';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CommentItemProps {
  comment: {
    _id: string;
    content?: string;
    comment?: string;
    text?: string;
    reviewId?: string;
    review?: {
      _id: string;
    };
    user: {
      _id: string;
      name: string;
      image?: string;
      avatar?: string;
      profileImg?: string;
    };
    createdAt: string;
    updatedAt?: string;
    [key: string]: unknown;
  };
  onDeleted: () => void;
  onUpdated: () => void;
  reviewId?: string; // Passed from parent or extracted from comment
}

export default function CommentItem({
  comment,
  onDeleted,
  onUpdated,
  reviewId,
}: CommentItemProps) {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const commentText = comment.text || comment.content || comment.comment || '';
  const [editContent, setEditContent] = useState(commentText);
  const [replyContent, setReplyContent] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [updateComment, { isLoading: isUpdating }] = useUpdateCommentMutation();
  const [deleteComment, { isLoading: isDeleting }] = useDeleteCommentMutation();
  const [postReply, { isLoading: isPostingReply }] = usePostCommentMutation();

  // Fetch replies if showReplies is true
  const {
    data: repliesData,
    isLoading: isLoadingReplies,
    refetch: refetchReplies,
  } = useGetRepliesQuery(comment._id, { skip: !showReplies });

  const replies = repliesData?.data || [];
  const activeReviewId =
    reviewId ||
    comment.reviewId ||
    (typeof comment.review === 'string' ? comment.review : comment.review?._id);

  const isOwner = user?._id === comment.user._id;
  const isEdited = comment.updatedAt && comment.updatedAt !== comment.createdAt;

  const formattedDate = new Date(comment.createdAt).toLocaleDateString(
    'en-US',
    {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
  );

  const handleUpdate = async () => {
    if (!editContent.trim()) {
      toast.error('Comment cannot be empty');
      return;
    }

    try {
      await updateComment({
        commentId: comment._id,
        content: editContent.trim(),
      }).unwrap();
      toast.success('Comment updated successfully!');
      setIsEditing(false);
      onUpdated();
    } catch (error) {
      const err = error as { data?: { message?: string } };
      console.error('Update error:', error);
      toast.error(err?.data?.message || 'Failed to update comment');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteComment(comment._id).unwrap();
      toast.success('Comment deleted successfully!');
      setShowDeleteConfirm(false);
      onDeleted();
    } catch (error) {
      const err = error as { data?: { message?: string } };
      console.error('Delete error:', error);
      toast.error(err?.data?.message || 'Failed to delete comment');
    }
  };

  const handleReply = async () => {
    const trimmedContent = replyContent.trim();
    if (!trimmedContent) {
      toast.error('Reply cannot be empty');
      return;
    }

    if (!activeReviewId) {
      console.error('CommentItem: Missing reviewId for comment', comment._id);
      toast.error('Review communication error. Please refresh.');
      return;
    }

    try {
      // Use .unwrap() to get the direct response and catch errors properly
      const response = await postReply({
        reviewId: activeReviewId,
        content: trimmedContent,
        parentComment: comment._id,
      }).unwrap();

      toast.success(response?.message || 'Reply submitted for approval!');
      setReplyContent('');
      setIsReplying(false);
      setShowReplies(true);
      router.refresh();
    } catch (error: any) {
      console.error('Reply submission failed:', error);

      // If the error contains a message from backend, show it.
      // Otherwise, show a generic failure message.
      const errorMsg =
        error?.data?.message || error?.message || 'Failed to post reply';
      toast.error(errorMsg);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditContent(commentText);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="shrink-0">
          {comment.user.image ||
          comment.user.avatar ||
          comment.user.profileImg ? (
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={
                  comment.user.image ||
                  comment.user.avatar ||
                  comment.user.profileImg ||
                  ''
                }
                alt={comment.user.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <FaUser className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-text-light dark:text-text-dark">
              {comment.user.name}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {formattedDate}
            </span>
            {isEdited && (
              <span className="text-xs text-gray-400 dark:text-gray-500 italic">
                (edited)
              </span>
            )}
          </div>

          {/* Comment Content */}
          {isEditing ? (
            <div className="space-y-2">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={3}
                maxLength={500}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={handleUpdate}
                  disabled={isUpdating}
                  className="flex items-center gap-1 px-3 py-1 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded transition-colors disabled:opacity-50"
                >
                  <FaSave className="w-3 h-3" />
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  disabled={isUpdating}
                  className="flex items-center gap-1 px-3 py-1 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded transition-colors"
                >
                  <FaTimes className="w-3 h-3" />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap wrap-break-word">
                {commentText}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() => setIsReplying(!isReplying)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                >
                  <FaReply className="w-3 h-3" />
                  Reply
                </button>

                {/* Expand/Collapse Replies Button */}
                <button
                  onClick={() => setShowReplies(!showReplies)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                >
                  {showReplies ? (
                    <FaChevronUp className="w-3 h-3" />
                  ) : (
                    <FaChevronDown className="w-3 h-3" />
                  )}
                  {showReplies ? 'Hide replies' : 'Show replies'}
                </button>

                {isOwner && (
                  <>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    >
                      <FaEdit className="w-3 h-3" />
                      Edit
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500 transition-colors"
                    >
                      <FaTrash className="w-3 h-3" />
                      Delete
                    </button>
                  </>
                )}
              </div>
            </>
          )}

          {/* Delete Confirmation */}
          {showDeleteConfirm && (
            <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-700 dark:text-red-400 mb-2">
                Are you sure you want to delete this comment?
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded transition-colors disabled:opacity-50"
                >
                  {isDeleting ? 'Deleting...' : 'Yes, Delete'}
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  disabled={isDeleting}
                  className="px-3 py-1 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Reply Form */}
          {isReplying && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-2">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write a reply..."
                rows={2}
                maxLength={300}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
              />
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={handleReply}
                  disabled={isPostingReply}
                  className="px-3 py-1 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded transition-colors disabled:opacity-50"
                >
                  {isPostingReply ? 'Posting...' : 'Post Reply'}
                </button>
                <button
                  onClick={() => setIsReplying(false)}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Nested Replies */}
      {showReplies && (
        <div className="pl-12 space-y-4 border-l-2 border-gray-100 dark:border-gray-800 ml-4">
          {isLoadingReplies ? (
            <div className="text-sm text-gray-500 dark:text-gray-400 py-2">
              Loading replies...
            </div>
          ) : replies.length > 0 ? (
            replies.map((reply: any) => (
              <CommentItem
                key={reply._id}
                comment={reply}
                onDeleted={refetchReplies}
                onUpdated={refetchReplies}
                reviewId={activeReviewId}
              />
            ))
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400 py-2">
              No replies yet
            </div>
          )}
        </div>
      )}
    </div>
  );
}
