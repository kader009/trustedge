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
        url: '/api/v1/category',
        method: 'GET',
      }),
    }),

    postProduct: build.mutation({
      query: (productData) => ({
        url: '/api/v1/review',
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

    // Get current user profile
    getUserProfile: build.query({
      query: () => ({
        url: '/api/v1/users/me',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    // Change password
    changePassword: build.mutation({
      query: (data) => ({
        url: '/api/v1/users/update-password',
        method: 'PATCH',
        body: data,
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
    // Get all comments (admin only)
    getAllComments: build.query({
      query: ({ page = 1, limit = 50 }) => ({
        url: '/api/v1/comments/admin/all-comments',
        params: { page, limit },
      }),
      providesTags: ['Comment'],
    }),

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
      query: ({ reviewId, content }) => {
        const body = { review: reviewId, text: content };
        console.log('API postComment - Sending body:', body);
        return {
          url: '/api/v1/comments',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        };
      },
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
        url: '/api/v1/review/admin/pending',
        method: 'GET',
      }),
      providesTags: ['PendingReview'],
    }),

    // Approve a review (admin only)
    approveReview: build.mutation({
      query: (reviewId) => ({
        url: `/api/v1/review/admin/approve/${reviewId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['PendingReview', 'Review'],
    }),

    // Reject a review (admin only)
    rejectReview: build.mutation({
      query: ({ reviewId, reason }) => ({
        url: `/api/v1/review/admin/unpublish/${reviewId}`,
        method: 'PATCH',
        body: { reason },
      }),
      invalidatesTags: ['PendingReview', 'Review'],
    }),

    // Approve a comment (admin only)
    approveComment: build.mutation({
      query: (commentId) => ({
        url: `/api/v1/comments/admin/approve/${commentId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Comment'],
    }),

    // get all review route
    getallReview: build.query({
      query: () => ({
        url: '/api/v1/review',
        method: 'GET',
      }),
      providesTags: ['Review'],
    }),

    // ============ USER REVIEWS ============
    // Get user's own reviews (using /products endpoint as reviews are products)
    getUserReviews: build.query({
      query: () => ({
        url: '/api/v1/review',
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

    // ============ CATEGORIES (ADMIN) ============
    // Get all categories (admin)
    getAllCategoriesAdmin: build.query({
      query: () => ({
        url: '/api/v1/category',
        method: 'GET',
      }),
      providesTags: ['Category'],
    }),

    // Get single category
    getCategoryById: build.query({
      query: (id) => ({
        url: `/api/v1/category/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'Category', id }],
    }),

    // Create category (admin)
    createCategory: build.mutation({
      query: (data) => ({
        url: '/api/v1/category/create-category',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Category'],
    }),

    // Update category (admin)
    updateCategory: build.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/category/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Category', id },
        'Category',
      ],
    }),

    // Delete category (admin)
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/api/v1/category/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),

    // ============ USER COMMENTS ============
    // Get user's own comments
    getUserComments: build.query({
      query: () => ({
        url: '/api/v1/comments/user/my-comments',
        method: 'GET',
      }),
      providesTags: ['Comment'],
    }),

    // Get comment count for a review
    getCommentCount: build.query({
      query: (reviewId) => ({
        url: `/api/v1/comments/count/${reviewId}`,
        method: 'GET',
      }),
    }),

    // Hard delete comment (admin)
    hardDeleteComment: build.mutation({
      query: (commentId) => ({
        url: `/api/v1/comments/hard-delete/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comment'],
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
  useGetUserProfileQuery,
  useChangePasswordMutation,
  // Voting
  useVoteReviewMutation,
  useUnvoteReviewMutation,
  useGetUserVoteQuery,
  // Comments
  useGetAllCommentsQuery,
  useGetCommentsQuery,
  usePostCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useGetUserCommentsQuery,
  useGetCommentCountQuery,
  useHardDeleteCommentMutation,
  // Admin Approval
  useGetPendingReviewsQuery,
  useApproveReviewMutation,
  useRejectReviewMutation,
  useApproveCommentMutation,
  // User Reviews
  useGetUserReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useGetallReviewQuery,
  // Categories (Admin)
  useGetAllCategoriesAdminQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = EduNestApi;
