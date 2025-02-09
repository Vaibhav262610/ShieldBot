"use client"


import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
            <motion.div
                className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-lg text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-extrabold text-blue-400 mb-8">Welcome Back to ShieldBot</h2>
                <p className="text-lg text-gray-300 mb-6">Secure your access with ShieldBot’s advanced authentication.</p>
                <form className="flex flex-col space-y-5">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-5 py-3 bg-gray-700 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-5 py-3 bg-gray-700 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-bold transition duration-300"
                    >
                        Login Securely
                    </button>
                </form>
                <Link href='/signup'>
                    <p className="text-md text-gray-400 mt-6">
                        Don't have an account? <span className="text-blue-400 hover:underline font-semibold">Sign up now</span>
                    </p>
                </Link>
            </motion.div>
        </div >
    );
};

export default Login;