"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Magnet from "./Magnet";
import RotatingText from "./RotatingText";
import Link from "next/link";

const Header = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({
            x: (e.clientX / window.innerWidth) * 20 - 10,
            y: (e.clientY / window.innerHeight) * 20 - 10,
        });
    };

    return (
        <div
            id="home"
            className="relative h-screen w-full flex justify-center items-center text-white bg-cover bg-center px-6 sm:px-12 lg:px-20 overflow-hidden"
            style={{ backgroundImage: "url('/bg.webp')" }}
            onMouseMove={handleMouseMove}
        >
            {/* Overlay for better text visibility */}
            <motion.div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                animate={{ x: mousePosition.x, y: mousePosition.y }}
                transition={{ ease: "easeOut", duration: 0.5 }}
            ></motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-10 px-4"
            >
                <div>
                    <h1 className="font-extrabold text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:flex-row flex-col flex gap-6 lg:gap-10 tracking-tight leading-tight text-white drop-shadow-xl">
                        Secure Your{" "}
                        <span className="text-green-400 text-5xl sm:text-6xl md:text-7xl">
                            <RotatingText
                                texts={["Security", "Shield", "Encryption", "Privacy!"]}
                                mainClassName="px-2 sm:px-3 md:px-4 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </span>
                    </h1>
                    <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-400 mt-3 flex items-center justify-center">
                        Before Hackers Do!{" "}
                        <SparklesIcon className="w-6 h-6 sm:w-8 sm:h-8 ml-2 text-yellow-300" />
                    </h1>
                </div>

                {/* Animated Button */}
                <Link href='/login'>
                    <Magnet padding={200} disabled={false} magnetStrength={10}>
                        <motion.button
                            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(34, 197, 94, 0.8)" }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold text-black bg-green-500 hover:bg-green-400 duration-300 px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg shadow-lg"
                        >
                            Test Now 🚀
                        </motion.button>
                    </Magnet>
                </Link>
            </motion.div>
        </div>
    );
};

export default Header;
