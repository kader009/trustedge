import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { setToken } from '@/src/redux/userAuth/userSlice';
import { Mutex } from 'async-mutex';

// Create a mutex to prevent multiple refresh attempts
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKENDAPI,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as { user: { token: string | null } }).user.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Check if we're already refreshing
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = (
          api.getState() as { user: { refreshToken: string | null } }
        ).user.refreshToken;

        if (refreshToken) {
          // Try to get a new token
          const refreshResult = await baseQuery(
            {
              url: '/api/v1/auth/refresh-token',
              method: 'POST',
              body: { refreshToken },
            },
            api,
            extraOptions
          );

          if (refreshResult.data) {
            // Store the new token
            const newToken = (
              refreshResult.data as { data: { accessToken: string } }
            ).data.accessToken;
            api.dispatch(setToken(newToken));

            // Retry the initial query
            result = await baseQuery(args, api, extraOptions);
          }
        }
      } finally {
        // Release must be called once the mutex should be released again.
        release();
      }
    } else {
      // Wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'trustedgeApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    'Review',
    'Comment',
    'Vote',
    'PendingReview',
    'UserReview',
    'User',
  ],
  endpoints: () => ({}),
});
