"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Ensure we track URL changes
import { FiHome, FiUsers, FiLogOut } from "react-icons/fi";

const SideBar = () => {
    const [activeHash, setActiveHash] = useState("");
    const pathname = usePathname(); // Track pathname to reset state if needed

    useEffect(() => {
        const updateHash = () => {
            setActiveHash(window.location.hash);
        };

        // Set initial hash when component mounts
        updateHash();

        // Listen for hash changes dynamically
        window.addEventListener("hashchange", updateHash);

        return () => {
            window.removeEventListener("hashchange", updateHash);
        };
    }, []);

    // Handle clicks to update state immediately
    const handleClick = (hash) => {
        setActiveHash(hash);
        window.location.hash = hash; // Update URL manually
    };

    return (
        <div className="z-50 fixed top-1/2 left-5 border border-white/10 transform -translate-y-1/2 bg-gray-800/80 text-white xl:flex flex-col items-center gap-16 py-16 px-4 rounded-xl hidden">
            <button onClick={() => handleClick("#home")}>
                <div className={`px-6 py-4 rounded-lg transition duration-200 ${activeHash === "#home" ? "bg-blue-700" : "hover:bg-gray-700"}`}>
                    <FiHome className="text-2xl" />
                </div>
            </button>
            <button onClick={() => handleClick("#team")}>
                <div className={`px-6 py-4 rounded-lg transition duration-200 ${activeHash === "#team" ? "bg-blue-700" : "hover:bg-gray-700"}`}>
                    <FiUsers className="text-2xl" />
                </div>
            </button>
            <button>
                <div className="px-6 py-4 rounded-lg hover:bg-red-500 transition duration-200">
                    <FiLogOut className="text-2xl" />
                </div>
            </button>
        </div>
    );
};

export default SideBar;
