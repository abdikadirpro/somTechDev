import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./PostSlice"
export const Store=configureStore({
   reducer:{
    posts:postReducer
   }
})