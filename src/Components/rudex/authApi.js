import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include", // ✅ include cookies for JWT
    headers: {
      "Content-Type": "application/json",
    },
  }),

  endpoints: (builder) => ({
    // REGISTER
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/user/register-user",
        method: "POST",
        body: userData,
      }),
    }),

    // LOGIN
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/user/login-user",
        method: "POST",
        body: loginData,
      }),
    }),

    // GET CURRENT LOGGED-IN USER
   getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),

    
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetMeQuery, // ✅ hook to get current user
} = authApi;
