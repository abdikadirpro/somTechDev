import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { SiApple } from 'react-icons/si'

function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl w-full max-w-md p-8 flex flex-col gap-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-700 dark:text-gray-200">
          Welcome Back!
        </h1>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-600 dark:text-gray-300 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-600 dark:text-gray-300 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400">Or sign in with</p>

        <div className="flex justify-center items-center gap-6">
          <FcGoogle className="w-12 h-12 cursor-pointer hover:scale-110 transition transform" />
          <SiApple className="w-12 h-12 cursor-pointer hover:scale-110 transition transform text-black dark:text-white" />
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignIn
