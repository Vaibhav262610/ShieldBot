"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const ShootingStar = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            return new Array(10).fill(0).map((_, i) => ({
                id: i,
                left: Math.random() * 100 + "vw",
                top: Math.random() * 100 + "vh",
                duration: Math.random() * 3 + 2
            }));
        };
        setStars(generateStars());
    }, []);

    return (
        <>
            {stars.map(star => (
                <motion.div
                    key={star.id}
                    className="absolute w-1 h-1 bg-white rounded-full shadow-lg"
                    style={{ left: star.left, top: star.top }}
                    animate={{
                        x: [0, -200],
                        y: [0, 200],
                        opacity: [1, 0]
                    }}
                    transition={{ duration: star.duration, repeat: Infinity, ease: "linear" }}
                />
            ))}
        </>
    );
};

const Signup = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <ShootingStar />
            </div>

            <motion.div
                className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-lg text-center transform hover:scale-105 transition-transform duration-500 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-extrabold text-blue-400 mb-8 animate-pulse">Create Your ShieldBot Account</h2>
                <p className="text-lg text-gray-300 mb-6">Join ShieldBot and experience top-tier security.</p>
                <form className="flex flex-col space-y-5">
                    <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full pl-12 px-5 py-3 bg-gray-700 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                        />
                    </div>
                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-12 px-5 py-3 bg-gray-700 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full pl-12 px-5 py-3 bg-gray-700 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-lg text-lg font-bold transition duration-300 shadow-lg hover:shadow-blue-500/50"
                    >
                        🚀 Sign Up Securely
                    </button>
                </form>
                <Link href='/login' className="">
                    <p className="text-md text-gray-400 mt-6">
                        Already have an account? <span className="text-blue-400 hover:underline font-semibold transition duration-300 hover:text-blue-300">Login here</span>
                    </p>
                </Link>
            </motion.div>
        </div>
    );
};

export default Signup;