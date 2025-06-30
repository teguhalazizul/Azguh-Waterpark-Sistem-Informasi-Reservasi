
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl   border-blue-100">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-700 mb-2">
                    Create Account
                </h2>
                <p className="text-blue-500 text-sm">Join us today and get started</p>
            </div>

            <form className="space-y-5">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-blue-700 mb-2"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-blue-50/50 border-2 border-blue-200 rounded-xl shadow-sm
                            placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500
                            transition-all duration-200 hover:border-blue-300"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-blue-700 mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-3 bg-blue-50/50 border-2 border-blue-200 rounded-xl shadow-sm
                            placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500
                            transition-all duration-200 hover:border-blue-300"
                        placeholder="********"
                    />
                </div>

                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-semibold text-blue-700 mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-4 py-3 bg-blue-50/50 border-2 border-blue-200 rounded-xl shadow-sm
                            placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500
                            transition-all duration-200 hover:border-blue-300"
                        placeholder="********"
                    />
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                        text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl
                        transition-all duration-300 transform"
                >
                    Create Account
                </motion.button>
            </form>

            <div className="text-center pt-6 border-t border-blue-100 mt-8">
                <p className="text-sm text-gray-600 mb-2">
                    Already have an account?
                </p>
                <Link to="/login">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-500 hover:text-blue-700 font-semibold transition-colors"
                    >
                        Sign In Instead
                    </motion.button>
                </Link>
            </div>
        </div>
    );
}
