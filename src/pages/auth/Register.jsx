import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
                Create Your Account ✨
            </h2>

            <form>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-blue-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-blue-50 border border-blue-300 rounded-lg shadow-sm
                            placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-blue-700 mb-1"
                    >
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

                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-blue-700 mb-1"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
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
                    Register
                </button>
            </form>

            <div className="mt-4 text-center">
                <p className="text-sm text-blue-700">
                    Already have an account?{" "}
                    <Link to="/login">
                        <button className="text-blue-500 hover:text-blue-700">
                            Login
                        </button>
                    </Link>
                </p>
            </div>
        </div>
    );
}
