'use client';

import { useState } from 'react';
import { useAppSelector } from '@/src/redux/hook';
import {
  useVoteReviewMutation,
  useUnvoteReviewMutation,
  useGetUserVoteQuery,
} from '@/src/redux/store/api/endApi';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface VotingButtonsProps {
  reviewId: string;
  initialVoteCount?: number;
}

export default function VotingButtons({
  reviewId,
  initialVoteCount = 0,
}: VotingButtonsProps) {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.user);
  const [voteCount, setVoteCount] = useState(initialVoteCount);

  const { data: userVoteData } = useGetUserVoteQuery(reviewId, {
    skip: !token,
  });

  const [voteReview, { isLoading: isVoting }] = useVoteReviewMutation();
  const [unvoteReview, { isLoading: isUnvoting }] = useUnvoteReviewMutation();

  const userVote = userVoteData?.data?.userVote;
  const isLoading = isVoting || isUnvoting;

  const handleVote = async (voteType: 'upvote' | 'downvote') => {
    if (!token) {
      toast.error('Please login to vote');
      router.push('/login');
      return;
    }

    try {
      if (userVote === voteType) {
        // Remove vote if clicking the same vote type
        const result = await unvoteReview(reviewId).unwrap();
        setVoteCount(result.data?.totalVotes || voteCount - 1);
        toast.success('Vote removed');
      } else {
        // Add or change vote
        const result = await voteReview({ reviewId, voteType }).unwrap();
        setVoteCount(result.data?.totalVotes || voteCount);
        toast.success(`Review ${voteType}d!`);
      }
    } catch (error: any) {
      console.error('Vote error:', error);
      toast.error(error?.data?.message || 'Failed to vote');
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Upvote Button */}
      <button
        onClick={() => handleVote('upvote')}
        disabled={isLoading}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
          userVote === 'upvote'
            ? 'bg-primary text-white border-primary'
            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <FaThumbsUp className="w-5 h-5" />
        <span className="font-semibold">
          {userVote === 'upvote' ? 'Upvoted' : 'Helpful'}
        </span>
      </button>

      {/* Vote Count */}
      <div className="text-center">
        <p className="text-2xl font-bold text-text-light dark:text-text-dark">
          {voteCount}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">votes</p>
      </div>

      {/* Downvote Button */}
      <button
        onClick={() => handleVote('downvote')}
        disabled={isLoading}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
          userVote === 'downvote'
            ? 'bg-red-500 text-white border-red-500'
            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <FaThumbsDown className="w-5 h-5" />
        <span className="font-semibold">
          {userVote === 'downvote' ? 'Downvoted' : 'Not Helpful'}
        </span>
      </button>
    </div>
  );
}
