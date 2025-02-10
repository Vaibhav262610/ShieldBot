"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FiHome, FiUsers, FiLogOut } from 'react-icons/fi';

const SideBar = () => {
    const pathname = usePathname(); // Get current route

    return (
        <div className="z-50 fixed top-1/2 left-5 border border-white/10 transform -translate-y-1/2 bg-gray-800/80 text-white xl:flex flex-col items-center gap-16 py-16 px-4 rounded-xl hidden">
            <Link href="/">
                <div className={`px-6 py-4 rounded-lg transition duration-200 ${pathname === "/" ? "bg-blue-700" : "hover:bg-gray-700"}`}>
                    <FiHome className="text-2xl" />
                </div>
            </Link>
            <Link href="#team">
                <div className={`px-6 py-4 rounded-lg transition duration-200 ${pathname === "/about" ? "bg-blue-700" : "hover:bg-gray-700"}`}>
                    <FiUsers className="text-2xl" />
                </div>
            </Link>
            <button>
                <div className="px-6 py-4 rounded-lg hover:bg-red-500 transition duration-200">
                    <FiLogOut className="text-2xl" />
                </div>
            </button>
        </div>
    );
};

export default SideBar;
