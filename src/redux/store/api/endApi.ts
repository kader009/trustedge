import { baseApi } from './baseApi';

const EduNestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (userInfo) => ({
        url: '/api/v1/auth/register',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // login route here
    login: build.mutation({
      query: (userInfo) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),

    allCategory: build.query({
      query: () => ({
        url: '/api/v1/categories',
        method: 'GET',
      }),
    }),

    postProduct: build.mutation({
      query: (productData) => ({
        url: '/api/v1/reviews',
        method: 'POST',
        body: productData,
      }),
      invalidatesTags: ['Review', 'UserReview'],
    }),

    getAllUsers: build.query({
      query: () => ({
        url: '/api/v1/users/admin/all-users',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    // Get single user by ID (admin)
    getUserById: build.query({
      query: (id) => ({
        url: `/api/v1/users/admin/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),

    // Update user (admin)
    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/users/admin/update-user/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'User', id },
        'User',
      ],
    }),

    // Delete user (admin)
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/api/v1/users/delete-user/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),

    // user update for (user)
    updateUserProfile: build.mutation({
      query: (detail) => ({
        url: '/api/v1/users/update-profile',
        method: 'PUT',
        body: detail,
      }),
    }),

    // ============ VOTING SYSTEM ============
    // Vote on a review (upvote)
    voteReview: build.mutation({
      query: ({ reviewId, voteType }) => ({
        url:
          voteType === 'upvote'
            ? '/api/v1/votes/upvote'
            : '/api/v1/votes/downvote',
        method: 'POST',
        body: { reviewId },
      }),
      invalidatesTags: (result, error, { reviewId }) => [
        { type: 'Review', id: reviewId },
        { type: 'Vote', id: reviewId },
      ],
    }),

    // Remove vote from a review
    unvoteReview: build.mutation({
      query: (reviewId) => ({
        url: `/api/v1/votes/remove/${reviewId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, reviewId) => [
        { type: 'Review', id: reviewId },
        { type: 'Vote', id: reviewId },
      ],
    }),

    // Get user's vote on a specific review
    getUserVote: build.query({
      query: (reviewId) => ({
        url: `/api/v1/votes/user/${reviewId}`,
        method: 'GET',
      }),
      providesTags: (result, error, reviewId) => [
        { type: 'Vote', id: reviewId },
      ],
    }),

    // ============ COMMENT SYSTEM ============
    // Get comments for a review
    getComments: build.query({
      query: ({ reviewId, page = 1, limit = 10 }) => ({
        url: `/api/v1/comments/review/${reviewId}`,
        params: { page, limit },
      }),
      providesTags: (result, error, { reviewId }) => [
        { type: 'Comment', id: reviewId },
      ],
    }),

    // Post a new comment
    postComment: build.mutation({
      query: ({ reviewId, content }) => ({
        url: '/api/v1/comments',
        method: 'POST',
        body: { reviewId, content },
      }),
      invalidatesTags: (result, error, { reviewId }) => [
        { type: 'Comment', id: reviewId },
      ],
    }),

    // Update a comment
    updateComment: build.mutation({
      query: ({ commentId, content }) => ({
        url: `/api/v1/comments/${commentId}`,
        method: 'PUT',
        body: { content },
      }),
      invalidatesTags: ['Comment'],
    }),

    // Delete a comment
    deleteComment: build.mutation({
      query: (commentId) => ({
        url: `/api/v1/comments/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comment'],
    }),

    // ============ ADMIN APPROVAL SYSTEM ============
    // Get pending reviews (admin only)
    getPendingReviews: build.query({
      query: () => ({
        url: '/api/v1/reviews/admin/pending',
        method: 'GET',
      }),
      providesTags: ['PendingReview'],
    }),

    // Approve a review (admin only)
    approveReview: build.mutation({
      query: (reviewId) => ({
        url: `/api/v1/reviews/admin/approve/${reviewId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['PendingReview', 'Review'],
    }),

    // Reject a review (admin only)
    rejectReview: build.mutation({
      query: ({ reviewId, reason }) => ({
        url: `/api/v1/reviews/admin/reject/${reviewId}`,
        method: 'PATCH',
        body: { reason },
      }),
      invalidatesTags: ['PendingReview', 'Review'],
    }),

    // ============ USER REVIEWS ============
    // Get user's own reviews (using /products endpoint as reviews are products)
    getUserReviews: build.query({
      query: () => ({
        url: '/api/v1/products',
        method: 'GET',
      }),
      providesTags: ['UserReview'],
    }),

    // Update user's review
    updateReview: build.mutation({
      query: ({ reviewId, rating, review }) => ({
        url: `/api/v1/reviews/${reviewId}`,
        method: 'PATCH',
        body: { rating, review },
      }),
      invalidatesTags: ['UserReview', 'Review'],
    }),

    // Delete user's review
    deleteReview: build.mutation({
      query: (reviewId) => ({
        url: `/api/v1/reviews/${reviewId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserReview', 'Review'],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useAllCategoryQuery,
  usePostProductMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useUpdateUserProfileMutation,
  // Voting
  useVoteReviewMutation,
  useUnvoteReviewMutation,
  useGetUserVoteQuery,
  // Comments
  useGetCommentsQuery,
  usePostCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  // Admin Approval
  useGetPendingReviewsQuery,
  useApproveReviewMutation,
  useRejectReviewMutation,
  // User Reviews
  useGetUserReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = EduNestApi;
