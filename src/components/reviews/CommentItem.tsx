'use client';

import { useState } from 'react';
import { useAppSelector } from '@/src/redux/hook';
import {
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} from '@/src/redux/store/api/endApi';
import { FaEdit, FaTrash, FaSave, FaTimes, FaUser } from 'react-icons/fa';
import { toast } from 'sonner';
import Image from 'next/image';

interface CommentItemProps {
  comment: {
    _id: string;
    content?: string;
    comment?: string;
    user: {
      _id: string;
      name: string;
      image?: string;
    };
    createdAt: string;
    updatedAt?: string;
    [key: string]: unknown;
  };
  onDeleted: () => void;
  onUpdated: () => void;
}

export default function CommentItem({
  comment,
  onDeleted,
  onUpdated,
}: CommentItemProps) {
  const { user } = useAppSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const commentText = comment.content || comment.comment || '';
  const [editContent, setEditContent] = useState(commentText);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [updateComment, { isLoading: isUpdating }] = useUpdateCommentMutation();
  const [deleteComment, { isLoading: isDeleting }] = useDeleteCommentMutation();

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

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditContent(commentText);
  };

  return (
    <div className="flex gap-4">
      {/* Avatar */}
      <div className="flex-shrink-0">
        {comment.user.image ? (
          <Image
            src={comment.user.image}
            alt={comment.user.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
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
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words">
              {commentText}
            </p>

            {/* Actions */}
            {isOwner && (
              <div className="flex items-center gap-3 mt-2">
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
              </div>
            )}
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
      </div>
    </div>
  );
}
