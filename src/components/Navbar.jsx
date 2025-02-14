"use client";

import DelayedLink from '@/contexts/DelayLink';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profilePic, setProfilePic] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const userProfile = localStorage.getItem("profilePic"); // Store profile pic URL in localStorage

        if (token) {
            setIsLoggedIn(true);
            if (userProfile) {
                setProfilePic(userProfile);
            }
        }
    }, []);

    return (
        <div className='flex w-full justify-center'>
            <nav className="fixed border border-white/10 top-5 w-[90%] md:w-1/2 py-3 mx-auto bg-white/10 backdrop-blur-md text-white rounded-xl z-40">
                <div className="flex justify-between items-center py-4 px-6">
                    <Link href="/">
                        <h1 className="text-2xl xl:text-4xl font-bold cursor-pointer">
                            Shield<span className="text-red-500">Bot</span>
                        </h1>
                    </Link>

                    {/* Hamburger Menu for Mobile */}
                    <button
                        className="xl:hidden text-white text-3xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex gap-5 text-xl font-medium text-gray-400">
                        <Link href="#home"><h1 className="hover:bg-gray-600/20 px-5 py-2 rounded-md hover:text-white duration-200">Home</h1></Link>
                        <Link href="#about"><h1 className="hover:bg-gray-600/20 px-5 py-2 rounded-md hover:text-white duration-200">About Us</h1></Link>
                        <Link href="#faq"><h1 className="hover:bg-gray-600/20 px-5 py-2 rounded-md hover:text-white duration-200">FAQ</h1></Link>
                    </div>

                    {/* Desktop Profile or Auth Buttons */}
                    <div className="hidden xl:flex items-center gap-5">
                        {!isLoggedIn ? (
                            <>
                                <DelayedLink delay={500} href='/login'>
                                    <button className="text-gray-400 hover:text-blue-300 duration-200">Log In</button>
                                </DelayedLink>
                                <DelayedLink delay={500} href='/signup'>
                                    <button className="text-md bg-blue-700 hover:bg-blue-600 duration-300 px-6 py-3 rounded-xl">Sign Up</button>
                                </DelayedLink>
                            </>
                        ) : (
                            <Link href="/profile">
                                {profilePic ? (
                                    <img
                                        src={profilePic}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-lg cursor-pointer"
                                    />
                                ) : (
                                    <FiUser className="text-3xl cursor-pointer hover:text-blue-400" />
                                )}
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* Full-Screen Mobile Menu */}
            <div
                className={`z-40 fixed inset-0 bg-[#1f252c] text-white flex flex-col items-center justify-center gap-8 text-2xl font-medium transform transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } xl:hidden`}
            >
                <Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="#about" onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link href="#faq" onClick={() => setMenuOpen(false)}>FAQ</Link>

                {!isLoggedIn ? (
                    <>
                        <Link href='/login'>
                            <button className="text-gray-400 hover:text-blue-300 duration-200" onClick={() => setMenuOpen(false)}>Log In</button>
                        </Link>
                        <Link href='/signup'>
                            <button className="text-xl bg-blue-700 hover:bg-blue-600 duration-300 px-6 py-3 rounded-xl" onClick={() => setMenuOpen(false)}>Sign Up</button>
                        </Link>
                    </>
                ) : (
                    <Link href="/profile" onClick={() => setMenuOpen(false)}>
                        {profilePic ? (
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-16 h-16 rounded-full border-4 border-blue-400 shadow-lg"
                            />
                        ) : (
                            <FiUser className="text-4xl cursor-pointer hover:text-blue-400" />
                        )}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
