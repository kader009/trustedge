import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'trustedgeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://trustedge-backend.vercel.app',
    credentials: 'include',
  }),
  endpoints: () => ({}),
});
