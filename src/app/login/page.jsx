"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ For redirection
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa";

const ShootingStar = () => {
    const [stars, setStars] = useState([]);

    useState(() => {
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

const Login = () => {
    const router = useRouter(); // ✅ For redirection after successful login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const loginData = { email, password };
        console.log("🔍 Sending Login Data:", loginData); // ✅ Logs form data before sending

        try {
            const response = await fetch("http://192.168.250.245:8000/auth/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                throw new Error("Invalid email or password");
            }

            const result = await response.json();
            console.log("✅ Login Successful:", result);

            // Save token if backend returns one (optional)
            if (result.token) {
                localStorage.setItem("authToken", result.token);
            }
            // ✅ Redirect to Dashboard or another page after login
            router.push("/dashboard");
        } catch (err) {
            console.log("❌ Login Error:", err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <ShootingStar />
            </div>

            <motion.div
                className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-lg text-center transform hover:scale-105 transition-transform duration-500 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-extrabold text-blue-400 mb-8 animate-pulse">Welcome Back to ShieldBot</h2>
                <p className="text-lg text-gray-300 mb-6">Secure your access with ShieldBot&apos;s advanced authentication.</p>

                {error && <p className="text-red-500 mb-4">{error}</p>} {/* Show error message if login fails */}

                <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 px-5 py-3 bg-gray-700 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-12 px-5 py-3 bg-gray-700 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-lg text-lg font-bold transition duration-300 shadow-lg hover:shadow-blue-500/50"
                        disabled={loading}
                    >
                        {loading ? "🔄 Logging in..." : "🔒 Login Securely"}
                    </button>
                </form>

                <Link href="/signup">
                    <p className="text-md text-gray-400 mt-6">
                        Don&apos;t have an account ? <span className="text-blue-400 hover:underline font-semibold transition duration-300 hover:text-blue-300">Sign up now</span>
                    </p>
                </Link>
            </motion.div>
        </div>
    );
};

export default Login;
