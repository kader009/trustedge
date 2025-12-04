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
  }),
});

export const { useSignUpMutation, useLoginMutation, useAllCategoryQuery } =
  EduNestApi;
