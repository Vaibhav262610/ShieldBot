"use client";

import React from "react";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div
            className="relative h-screen w-full flex justify-center items-center text-white bg-cover bg-center px-4 sm:px-8"
            style={{ backgroundImage: "url('/bg.webp')" }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-10 px-4"
            >
                <div>
                    <h1 className="font-extrabold text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
                        Stress-Test Your <span className="text-blue-400">Security</span>
                    </h1>
                    <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-400 mt-2 sm:mt-3">
                        Before Hackers Do!
                    </h1>
                </div>

                {/* Animated Button */}
                <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(34, 197, 94, 0.8)" }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-base sm:text-lg md:text-xl font-semibold text-black bg-green-500 hover:bg-green-400 duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                    Test Now 🚀
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Header;
