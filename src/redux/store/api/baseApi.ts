import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'trustedgeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKENDAPI,
    credentials: 'include',
  }),
  tagTypes: ['Review', 'Comment', 'Vote', 'PendingReview', 'UserReview'],
  endpoints: () => ({}),
});
