"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Globe, Activity, ShieldCheck } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const Features = () => {
    return (
        <div id="about" className="min-h-screen border-t border-white/30 text-white flex flex-col items-center justify-center px-6 py-12 w-full">
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                ShieldBot – Advanced Security Testing
            </motion.h1>
            <p className="mt-2 text-sm md:text-lg text-gray-400 text-center max-w-2xl">
                Simulate real-world cyber threats and fortify your defenses against DDoS attacks.
            </p>

            {/* Features Section */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl w-full px-4">
                <Fade direction="up" triggerOnce>
                    <div className="bg-gray-800/70 p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-3 transform hover:scale-105 transition duration-300">
                        <ShieldAlert size={40} className="text-red-500" />
                        <h3 className="text-lg md:text-xl font-semibold">DDoS Attack Simulation</h3>
                        <p className="text-sm md:text-base text-gray-400">Run controlled attack scenarios to test website resilience.</p>
                    </div>
                </Fade>

                <Fade direction="up" delay={100} triggerOnce>
                    <div className="bg-gray-800/70 p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-3 transform hover:scale-105 transition duration-300">
                        <Globe size={40} className="text-blue-500" />
                        <h3 className="text-lg md:text-xl font-semibold">Global Load Testing</h3>
                        <p className="text-sm md:text-base text-gray-400">Evaluate performance under high-traffic conditions worldwide.</p>
                    </div>
                </Fade>

                <Fade direction="up" delay={200} triggerOnce>
                    <div className="bg-gray-800/70 p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-3 transform hover:scale-105 transition duration-300">
                        <Activity size={40} className="text-green-500" />
                        <h3 className="text-lg md:text-xl font-semibold">Live Security Analytics</h3>
                        <p className="text-sm md:text-base text-gray-400">Monitor security responses and adjust defenses in real-time.</p>
                    </div>
                </Fade>

                <Fade direction="up" delay={300} triggerOnce>
                    <div className="bg-gray-800/70 p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-3 transform hover:scale-105 transition duration-300">
                        <ShieldCheck size={40} className="text-yellow-500" />
                        <h3 className="text-lg md:text-xl font-semibold">Threat Prevention Reports</h3>
                        <p className="text-sm md:text-base text-gray-400">Receive actionable insights to enhance security infrastructure.</p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Features;