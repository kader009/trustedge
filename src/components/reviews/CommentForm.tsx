'use client';

import { useState } from 'react';
import { usePostCommentMutation } from '@/src/redux/store/api/endApi';
import { toast } from 'sonner';
import { FaPaperPlane } from 'react-icons/fa';

interface CommentFormProps {
  reviewId: string;
  onCommentAdded: () => void;
}

export default function CommentForm({
  reviewId,
  onCommentAdded,
}: CommentFormProps) {
  const [content, setContent] = useState('');
  const [postComment, { isLoading }] = usePostCommentMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!reviewId) {
      toast.error('Review ID is missing');
      return;
    }

    if (!content.trim()) {
      toast.error('Please enter a comment');
      return;
    }

    if (content.length > 500) {
      toast.error('Comment must be less than 500 characters');
      return;
    }

    try {
      console.log('Posting comment with:', {
        reviewId,
        content: content.trim(),
      });
      await postComment({ reviewId, content: content.trim() }).unwrap();
      toast.success(
        'Comment submitted successfully! It will appear after admin approval.'
      );
      setContent('');
      onCommentAdded();
    } catch (error) {
      const err = error as { status?: number; data?: { message?: string } };
      console.error('Comment error:', error);

      if (err?.data?.message === 'Review not found') {
        toast.error(
          'This review is not available for comments. It might have been deleted or is not approved yet.'
        );
      } else {
        toast.error(err?.data?.message || 'Failed to post comment');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts..."
          rows={3}
          maxLength={500}
          disabled={isLoading}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none disabled:opacity-50"
        />
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          {content.length}/500
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium">📝 Note:</span> All comments are
          reviewed by admins before being published
        </p>
        <button
          type="submit"
          disabled={isLoading || !content.trim()}
          className="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Posting...
            </>
          ) : (
            <>
              <FaPaperPlane className="w-4 h-4" />
              Post Comment
            </>
          )}
        </button>
      </div>
    </form>
  );
}
