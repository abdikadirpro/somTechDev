import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include",
  }),
  tagTypes: ["Post"],

  endpoints: (builder) => ({
    // CREATE
    createPost: builder.mutation({
      query: (formData) => ({
        url: "/post/create-post",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Post"],
    }),

    // GET ALL
    getPosts: builder.query({
      query: () => "/post/get-post",
      providesTags: ["Post"],
    }),

    // GET BY ID
    getPostById: builder.query({
      query: (id) => `/post/get-post/${id}`,
    }),

    // UPDATE ✅
    updatePost: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/post/update-post/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Post"],
    }),

    // DELETE
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/post/delete-post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetPostsQuery,
  useGetPostByIdQuery,
  useUpdatePostMutation, // ✅ now it exists
  useDeletePostMutation,
} = postApi;
