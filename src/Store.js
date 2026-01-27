import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./PostSlice";
import { authApi } from "./Components/rudex/authApi"; // ✅ REQUIRED
import { postApi } from "./Components/rudex/postApi";
import userReducerModel from "./userSlice"

export const Store = configureStore({
  reducer: {
    posts: postReducer,
    userModel:userReducerModel,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(postApi.middleware),
});
