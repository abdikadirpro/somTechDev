import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRegisterUserMutation } from "../rudex/authApi.js";
import toast from "react-hot-toast";



function SignOut() {
  const { t } = useTranslation();
  const darkMode = useSelector((state) => state.posts.darkMode);

  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const res = await registerUser(formData).unwrap();
      console.log("User registered:", res);
    toast.success(res.message);
    navigate('/')
    } catch (err) {
    toast.error(err?.data?.message || "Registration failed");
     console.log(err)
    }
  };

  return (
    <div
      className={
        darkMode
          ? "flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4"
          : "flex justify-center items-center min-h-screen dark:bg-gray-900 px-4"
      }
    >
      <div
        className={
          darkMode
            ? "bg-white dark:bg-gray-800 shadow-lg rounded-xl w-full max-w-md p-8 flex flex-col gap-6"
            : "dark:bg-gray-700 shadow-lg shadow-slate-400 rounded-xl w-full max-w-md p-8 flex flex-col gap-6"
        }
      >
        <h1
          className={
            darkMode
              ? "text-3xl sm:text-4xl font-bold text-center text-gray-700 dark:text-gray-200"
              : "text-3xl sm:text-4xl font-bold text-center text-gray-300 dark:text-gray-200"
          }
        >
          {t("signUp.title")}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="firstName"
                className={
                  darkMode
                    ? "text-gray-600 dark:text-gray-300 font-medium"
                    : "text-slate-300 dark:text-gray-300 font-medium"
                }
              >
                {t("signUp.firstName")}
              </label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t("signUp.firstName")}
                className={
                  darkMode
                    ? "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
                    : "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 bg-slate-800 dark:text-white transition"
                }
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="lastName"
                className={
                  darkMode
                    ? "text-gray-600 dark:text-gray-300 font-medium"
                    : "text-slate-300 dark:text-gray-300 font-medium"
                }
              >
                {t("signUp.lastName")}
              </label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t("signUp.lastName")}
                className={
                  darkMode
                    ? "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
                    : "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 bg-slate-800 dark:text-white transition"
                }
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className={
                darkMode
                  ? "text-gray-600 dark:text-gray-300 font-medium"
                  : "text-slate-300 dark:text-gray-300 font-medium"
              }
            >
              {t("signUp.email")}
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("signUp.email")}
              className={
                darkMode
                  ? "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
                  : "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 bg-slate-800 dark:text-white transition"
              }
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className={
                darkMode
                  ? "text-gray-600 dark:text-gray-300 font-medium"
                  : "text-slate-300 dark:text-gray-300 font-medium"
              }
            >
              {t("signUp.password")}
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t("signUp.password")}
              className={
                darkMode
                  ? "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
                  : "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 bg-slate-800 dark:text-white transition"
              }
              required
            />
          </div>

          {/* {error && (
            <p className="text-red-500 text-sm text-center">
              {error?.data?.message || "Something went wrong"}
            </p>
          )} */}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
          >
            {isLoading ? "Signing up..." : t("signUp.button")}
          </button>
        </form>

        <p className="text-center text-gray-500 dark:text-gray-400">
          {t("signUp.already")}{" "}
          <Link
            to="/signin"
            className="text-blue-500 font-semibold hover:underline"
          >
            {t("signUp.signIn")}
          </Link>
        </p>

        <p className="text-center text-gray-400">
          {t("signUp.orSignUpWith")}
        </p>

        <div className="flex justify-center items-center gap-6">
          <FcGoogle className="w-12 h-12 cursor-pointer hover:scale-110 transition transform" />
          <SiApple className="w-12 h-12 cursor-pointer hover:scale-110 transition transform text-black dark:text-white" />
        </div>
      </div>
    </div>
  );
}

export default SignOut;
