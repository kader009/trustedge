import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'trustedgeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://trustedge-backend.vercel.app',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as { user: { token: string } }).user.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
