'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  useGetAllCommentsQuery,
  useHardDeleteCommentMutation,
  useApproveCommentMutation,
} from '@/src/redux/store/api/endApi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import {
  FaTrash,
  FaComment,
  FaUser,
  FaClock,
  FaSearch,
  FaCheckCircle,
} from 'react-icons/fa';

interface Comment {
  _id: string;
  content?: string;
  text?: string;
  reviewId?: string;
  review?: string;
  userId?: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    avatar?: string;
  };
  user?: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    avatar?: string;
  };
  status?: string;
  createdAt: string;
  updatedAt?: string;
}

export default function PendingCommentsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>(
    'pending'
  );

  const { data: commentsData, isLoading } = useGetAllCommentsQuery({
    page: 1,
    limit: 100,
  });

  const [hardDeleteComment, { isLoading: isDeleting }] =
    useHardDeleteCommentMutation(undefined);
  const [approveComment] = useApproveCommentMutation(undefined);

  const comments: Comment[] =
    (commentsData?.data?.comments as Comment[]) ||
    (commentsData?.comments as Comment[]) ||
    (Array.isArray(commentsData?.data)
      ? (commentsData.data as Comment[])
      : []) ||
    [];

  // Filter comments based on approval status
  const filteredByStatus = comments.filter((comment) => {
    if (filter === 'pending')
      return comment.status === 'pending' || !comment.status;
    if (filter === 'approved')
      return comment.status === 'published' || comment.status === 'approved';
    return true; // 'all'
  });

  // Then filter by search term
  const filteredComments = filteredByStatus.filter((comment) => {
    const commentText = comment.text || comment.content || '';
    const userData = comment.user || comment.userId;
    const userName = userData?.name || '';

    return (
      commentText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const pendingCount = comments.filter(
    (comment) => comment.status === 'pending' || !comment.status
  ).length;
  const approvedCount = comments.filter(
    (comment) => comment.status === 'published' || comment.status === 'approved'
  ).length;

  const handleApprove = async (commentId: string) => {
    try {
      await approveComment(commentId).unwrap();
      toast.success('Comment approved successfully');
      router.refresh();
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } };
      toast.error(err?.data?.message || 'Failed to approve comment');
    }
  };

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
    <div className="flex flex-1 flex-col w-full max-w-[100vw] overflow-x-hidden px-2 py-4 md:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex w-full flex-col gap-3">
          <h1 className="text-text-light dark:text-white text-2xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
            Pending Comment Moderation
          </h1>
          <p className="text-text-light dark:text-white text-sm sm:text-base font-normal leading-normal">
            Review and moderate user comments. Approve or reject pending
            comments.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => setFilter('pending')}
            className={`px-6 py-3 font-semibold transition-colors relative cursor-pointer whitespace-nowrap ${
              filter === 'pending'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Pending
            {pendingCount > 0 && (
              <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-100 dark:bg-card-dark text-yellow-800 dark:text-yellow-300 rounded-full">
                {pendingCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-6 py-3 font-semibold transition-colors relative cursor-pointer whitespace-nowrap ${
              filter === 'approved'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Approved
            {approvedCount > 0 && (
              <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
                {approvedCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'all'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            All Comments
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 h-12 md:h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-primary/50"
            placeholder="Search comments by content or author..."
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <FaClock className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-200 text-sm">
                Pending Review
              </p>
              <p className="text-2xl font-bold text-gray-500 dark:text-white">
                {pendingCount}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <FaCheckCircle className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-200 text-sm">
                Approved
              </p>
              <p className="text-2xl font-bold text-gray-500 dark:text-white">
                {approvedCount}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
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
      </div>

      {/* Comments List */}
      <div>
        {isLoading ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-200">
            Loading comments...
          </div>
        ) : filteredComments.length === 0 ? (
          <div className="text-center py-12">
            <FaComment className="mx-auto text-6xl text-gray-500 dark:text-gray-200 mb-4" />
            <p className="text-gray-500 dark:text-gray-200 text-lg">
              {searchTerm
                ? 'No comments found matching your search'
                : filter === 'pending'
                ? 'No pending comments to review'
                : filter === 'approved'
                ? 'No approved comments yet'
                : 'No comments yet'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredComments.map((comment) => (
              <div
                key={comment._id}
                className={`bg-white dark:bg-card-dark rounded-xl border ${
                  comment.status === 'published' ||
                  comment.status === 'approved'
                    ? 'border-green-200 dark:border-green-800/30'
                    : 'border-yellow-200 dark:border-yellow-800/30'
                } p-4 md:p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="flex-1 w-full min-w-0">
                    {/* Status Badge */}
                    <div className="mb-3">
                      {comment.status === 'published' ||
                      comment.status === 'approved' ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-card-dark text-green-800 dark:text-green-300 text-xs font-semibold rounded-full">
                          <FaCheckCircle /> Approved
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 dark:bg-card-dark text-yellow-800 dark:text-yellow-300 text-xs font-semibold rounded-full">
                          <FaClock /> Pending Review
                        </span>
                      )}
                    </div>

                    {/* User Info */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 overflow-hidden flex items-center justify-center shrink-0">
                        {comment.user?.image ||
                        comment.user?.avatar ||
                        comment.userId?.image ||
                        comment.userId?.avatar ? (
                          <Image
                            src={
                              comment.user?.image ||
                              comment.user?.avatar ||
                              comment.userId?.image ||
                              comment.userId?.avatar ||
                              ''
                            }
                            alt={
                              comment.user?.name ||
                              comment.userId?.name ||
                              'User'
                            }
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <FaUser className="text-primary" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-500 dark:text-white font-bold truncate">
                          {comment.user?.name ||
                            comment.userId?.name ||
                            'Unknown User'}
                        </p>
                        <p className="text-gray-500 dark:text-gray-200 text-sm truncate">
                          {comment.user?.email ||
                            comment.userId?.email ||
                            'No email'}
                        </p>
                      </div>
                      <span className="ml-auto text-gray-500 dark:text-gray-200 text-sm whitespace-nowrap">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Comment Content */}
                    <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-3 md:p-4 mb-3">
                      <p className="text-gray-500 dark:text-white break-all">
                        {comment.text || comment.content || 'No content'}
                      </p>
                    </div>

                    {comment.updatedAt &&
                      comment.updatedAt !== comment.createdAt && (
                        <p className="text-gray-500 dark:text-gray-200 text-xs">
                          Edited: {new Date(comment.updatedAt).toLocaleString()}
                        </p>
                      )}
                  </div>

                  <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto">
                    {comment.status !== 'published' &&
                      comment.status !== 'approved' && (
                        <button
                          onClick={() => handleApprove(comment._id)}
                          className="flex-1 sm:flex-none justify-center items-center gap-2 px-4 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors whitespace-nowrap cursor-pointer"
                        >
                          <FaCheckCircle /> Approve
                        </button>
                      )}
                    <button
                      onClick={() =>
                        handleDelete(
                          comment._id,
                          comment.text || comment.content || ''
                        )
                      }
                      disabled={isDeleting}
                      className="flex-1 sm:flex-none justify-center items-center gap-2 px-4 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                    >
                      <FaTrash /> Delete
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
