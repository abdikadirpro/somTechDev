import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { useLoginUserMutation, useGetMeQuery } from "../rudex/authApi";
import { setUser } from "../../userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const darkMode = useSelector((state) => state.posts.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { refetch } = useGetMeQuery(); // no skip

  const [loginUser, { isLoading }] = useLoginUserMutation();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!formData.email || !formData.password) {
        return toast.error("Please fill all fields");
      }

      try {
        // 1️⃣ Login user
        const res = await loginUser(formData).unwrap();

        // 2️⃣ Save token
        localStorage.setItem("token", res.token);

        // 3️⃣ Update Redux — this will automatically refresh Header
        dispatch(setUser(res.user));
       

        // 4️⃣ Toast success
        toast.success("Login successful");
         await refetch()

        // 5️⃣ Navigate after dispatch
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || "Login failed");
      }
    };



  return (
    <div
      className={`flex justify-center items-center min-h-screen px-4 ${
        darkMode ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 flex flex-col gap-6 rounded-xl shadow-lg ${
          darkMode ? "bg-white dark:bg-gray-800" : "bg-slate-700 text-white"
        }`}
      >
        <h1
          className={`text-3xl sm:text-4xl font-bold text-center ${
            darkMode ? "text-gray-700 dark:text-gray-200" : "text-gray-300"
          }`}
        >
          Welcome Back!
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label
              className={`font-medium ${
                darkMode ? "text-gray-600 dark:text-gray-300" : "text-slate-300"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-400 ${
                darkMode
                  ? "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  : "border-gray-300 bg-slate-800 text-white"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={`font-medium ${
                darkMode ? "text-gray-600 dark:text-gray-300" : "text-slate-300"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-400 ${
                darkMode
                  ? "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  : "border-gray-300 bg-slate-800 text-white"
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg disabled:opacity-60"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-gray-400">Or sign in with</p>
        <div className="flex justify-center items-center gap-6">
          <FcGoogle className="w-12 h-12 cursor-pointer hover:scale-110 transition" />
          <SiApple className="w-12 h-12 cursor-pointer hover:scale-110 transition text-black dark:text-white" />
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
