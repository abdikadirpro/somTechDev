import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Abouts from "./pages/About";
import Service from "./pages/Service";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";

import Header from "./Components/home/Header";

import BlogsCreate from "./Components/blogs/BlogsCreate";
import PostList from "./Components/blogs/PostList";

import SignOut from "./Components/pricipal/SignOut";
import SignIn from "./Components/pricipal/SignIn";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./Components/translate/LanguageSwitcher";
import Post from "./Components/blogs/Post";
import UpdatePost from "./Components/blogs/UpdatePost";

import { useEffect } from "react";
import { setUser } from "./userSlice";
import { useGetMeQuery } from "./Components/rudex/authApi";

const App = () => {
  const { t } = useTranslation();
  const darkMode = useSelector((state) => state.posts.darkMode);
  const dispatch = useDispatch();

  // ---------------- Step 1: Call getMe query ----------------
  const { data: userData, isSuccess, isLoading } = useGetMeQuery(undefined, {
    skip: !localStorage.getItem("token"), // skip if no token
  });

  // ---------------- Step 3: Update Redux when query succeeds ----------------
  useEffect(() => {
    if (isSuccess && userData) {
      dispatch(setUser(userData)); // <--- THIS IS STEP 3
    }
  }, [isSuccess, userData, dispatch]);

  if (isLoading) return <div className="p-5">Loading...</div>;

  return (
    <div className={darkMode ? "bg-white text-slate-700" : "bg-black text-white"}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/BlogsCreate" element={<BlogsCreate />} />
          <Route path="/blogs/PostList" element={<PostList />} />
          <Route path="/blogs/Post" element={<Post />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/signup" element={<SignOut />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/posts/update/:id" element={<UpdatePost />} />
          <Route path="/translate" element={<LanguageSwitcher />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
