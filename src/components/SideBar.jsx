"use client";

import { useEffect, useState } from "react";
import { FiHome, FiUsers, FiLogOut } from "react-icons/fi";

const SideBar = () => {
    const [activeHash, setActiveHash] = useState("");
    const [showTooltip, setShowTooltip] = useState(null); // Tooltip state

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

    // Logout handler
    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.clear(); // Clear local storage
            window.location.reload(); // Reload page to reflect logout state
        }
    };

    return (
        <div className="z-40 fixed top-1/2 left-5 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg shadow-lg border border-white/20
            text-white xl:flex flex-col items-center gap-10 py-6 px-4 rounded-3xl hidden transition-all duration-500">

            {/* Home Button */}
            <button
                onClick={() => handleClick("")}
                onMouseEnter={() => setShowTooltip("Home")}
                onMouseLeave={() => setShowTooltip(null)}
                className={`relative px-6 py-4 rounded-full transition duration-300 flex items-center justify-center shadow-md
                    ${activeHash === "" ? "bg-blue-600 scale-110" : "hover:bg-gray-700"}`}
            >
                <FiHome className="text-2xl" />
                {showTooltip === "Home" && (
                    <span className="absolute left-16 bg-black text-white text-xs px-3 py-1 rounded-lg shadow-md transition-opacity duration-200">
                        Home
                    </span>
                )}
            </button>

            {/* Team Button */}
            <button
                onClick={() => handleClick("#team")}
                onMouseEnter={() => setShowTooltip("Team")}
                onMouseLeave={() => setShowTooltip(null)}
                className={`relative px-6 py-4 rounded-full transition duration-300 flex items-center justify-center shadow-md
                    ${activeHash === "#team" ? "bg-blue-600 scale-110" : "hover:bg-gray-700"}`}
            >
                <FiUsers className="text-2xl" />
                {showTooltip === "Team" && (
                    <span className="absolute left-16 bg-black text-white text-xs px-3 py-1 rounded-lg shadow-md transition-opacity duration-200">
                        Team
                    </span>
                )}
            </button>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                onMouseEnter={() => setShowTooltip("Logout")}
                onMouseLeave={() => setShowTooltip(null)}
                className="relative px-6 py-4 rounded-full hover:bg-red-700 transition duration-300 flex items-center justify-center shadow-md"
            >
                <FiLogOut className="text-2xl" />
                {showTooltip === "Logout" && (
                    <span className="absolute left-16 bg-black text-white text-xs px-3 py-1 rounded-lg shadow-md transition-opacity duration-200">
                        Logout
                    </span>
                )}
            </button>
        </div>
    );
};

export default SideBar;
