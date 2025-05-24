import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
                Welcome Back 👋
            </h2>

            <form>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-blue-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="w-full px-4 py-2 bg-blue-50 border border-blue-300 rounded-lg shadow-sm
                            placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                        placeholder="you@example.com"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-blue-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 bg-blue-50 border border-blue-300 rounded-lg shadow-sm
                            placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                        placeholder="********"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300"
                >
                    Login
                </button>
            </form>
            <div className="mt-4 text-center">
        <Link
          to="/forgot"
          className="text-sm text-blue-500 hover:text-blue-700"
        >
          <button
          // Navigate to Forgot Password page
          >
            Forgot Password?
          </button>
        </Link>
      </div>

      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register">
          <button
            className="text-blue-500 hover:text-blue-700"
          >
            Sign Up
          </button>
          </Link>
          
        </p>
        </div>
        </div>
    )
}
