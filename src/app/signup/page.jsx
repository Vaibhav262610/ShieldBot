"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
    const router = useRouter(); // Next.js router
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            console.log("Submitting:", formData);
            const response = await fetch("http://13.233.91.145:8000/auth/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Response Data:", data);

            if (response.ok) {
                setMessage("✅ Signup successful! Redirecting...");
                setTimeout(() => {
                    router.push("/dashboard");
                }, 2000);
            } else {
                setMessage(`❌ ${data.message || "Signup failed. Try again."}`);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("❌ An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 overflow-hidden">
            <motion.div
                className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-lg text-center transform hover:scale-105 transition-transform duration-500 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-extrabold text-blue-400 mb-8 animate-pulse">
                    Create Your ShieldBot Account
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    Join ShieldBot and experience top-tier security.
                </p>

                {message && <p className="text-green-400 mb-4">{message}</p>}

                <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                    {/* ✅ Fixed: Ensure "username" is used instead of "name" */}
                    <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            name="username" // ✅ Fixed field name
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            className="w-full pl-12 px-5 py-3 bg-gray-700 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full pl-12 px-5 py-3 bg-gray-700 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full pl-12 px-5 py-3 bg-gray-700 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-lg text-lg font-bold transition duration-300 shadow-lg hover:shadow-blue-500/50"
                        disabled={loading}
                    >
                        {loading ? "🔄 Signing Up..." : "🚀 Sign Up Securely"}
                    </button>
                </form>

                <Link href="/login">
                    <p className="text-md text-gray-400 mt-6">
                        Already have an account?{" "}
                        <span className="text-blue-400 hover:underline font-semibold transition duration-300 hover:text-blue-300">
                            Login here
                        </span>
                    </p>
                </Link>
            </motion.div>
        </div>
    );
};

export default Signup;
