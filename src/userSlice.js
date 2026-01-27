// redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // null when not logged in
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "userModel",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { setUser, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
