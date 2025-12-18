import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { Link } from "react-router-dom";

function SignOut() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl w-full max-w-md p-8 flex flex-col gap-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-700 dark:text-gray-200">
          Create a New Account
        </h1>

        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first" className="text-gray-600 dark:text-gray-300 font-medium">
                First Name
              </label>
              <input
                id="first"
                type="text"
                placeholder="First"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="last" className="text-gray-600 dark:text-gray-300 font-medium">
                Last Name
              </label>
              <input
                id="last"
                type="text"
                placeholder="Last"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-600 dark:text-gray-300 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
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
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 font-semibold hover:underline">
            Sign In
          </Link>
        </p>

        <p className="text-center text-gray-400">Or sign up with</p>

        <div className="flex justify-center items-center gap-6">
          <FcGoogle className="w-12 h-12 cursor-pointer hover:scale-110 transition transform" />
          <SiApple className="w-12 h-12 cursor-pointer hover:scale-110 transition transform text-black dark:text-white" />
        </div>
      </div>
    </div>
  );
}

export default SignOut;
