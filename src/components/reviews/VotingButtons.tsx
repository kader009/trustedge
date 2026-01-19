'use client';

import { useState } from 'react';
import { useAppSelector } from '@/src/redux/hook';
import {
  useVoteReviewMutation,
  useUnvoteReviewMutation,
  useGetUserVoteQuery,
  useGetVoteCountsQuery,
} from '@/src/redux/store/api/endApi';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { VotingButtonsProps } from '@/src/types/votingButton';

export default function VotingButtons({
  reviewId,
  initialVoteCount = 0,
}: VotingButtonsProps) {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.user);

  // Local state for optimistic update fallback
  const [localVoteState, setLocalVoteState] = useState<{
    count: number;
    userVote: 'upvote' | 'downvote' | null;
  }>({
    count: initialVoteCount,
    userVote: null,
  });

  const { data: voteCountsData } = useGetVoteCountsQuery(reviewId);
  const { data: userVoteData } = useGetUserVoteQuery(reviewId, {
    skip: !token,
  });

  const [voteReview, { isLoading: isVoting }] = useVoteReviewMutation();
  const [unvoteReview, { isLoading: isUnvoting }] = useUnvoteReviewMutation();

  const isLoading = isVoting || isUnvoting;

  // Derive display values from API data with fallback to local state/props
  const displayCount = voteCountsData?.data?.upvotes ?? localVoteState.count;
  const userVote = userVoteData?.data?.type ?? localVoteState.userVote;

  const handleVote = async (voteType: 'upvote' | 'downvote') => {
    if (!token) {
      toast.error('Please login to vote');
      router.push('/login');
      return;
    }

    try {
      if (userVote === voteType) {
        // Remove vote if clicking the same vote type
        await unvoteReview(reviewId).unwrap();
        toast.success('Vote removed');
      } else {
        // Add or change vote
        await voteReview({ reviewId, voteType }).unwrap();
        toast.success(`Review ${voteType}d!`);
      }
    } catch (error: unknown) {
      console.error('Vote error:', error);
      const err = error as { data?: { message?: string } };
      toast.error(err?.data?.message || 'Failed to vote');
    }
  };

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {/* Upvote Button */}
      <button
        onClick={() => handleVote('upvote')}
        disabled={isLoading}
        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg border transition-all ${
          userVote === 'upvote'
            ? 'bg-primary text-white border-primary'
            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <FaThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-semibold text-sm sm:text-base">
          {userVote === 'upvote' ? 'Upvoted' : 'Helpful'}
        </span>
      </button>

      {/* Vote Count */}
      <div className="text-center min-w-[3rem]">
        <p className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">
          {displayCount}
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          votes
        </p>
      </div>

      {/* Downvote Button */}
      <button
        onClick={() => handleVote('downvote')}
        disabled={isLoading}
        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg border transition-all ${
          userVote === 'downvote'
            ? 'bg-red-500 text-white border-red-500'
            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <FaThumbsDown className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-semibold text-sm sm:text-base">
          {userVote === 'downvote' ? 'Downvoted' : 'Not Helpful'}
        </span>
      </button>
    </div>
  );
}
