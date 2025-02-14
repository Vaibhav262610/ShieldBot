import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 text-center flex flex-col md:flex-row items-center justify-between shadow-lg border-t border-gray-700 w-full">
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
                <h3 className="text-3xl font-extrabold text-blue-400 tracking-wide">ShieldBot</h3>
                <p className="text-lg text-gray-300 mt-3 leading-relaxed px-4 md:px-0">
                    Test your website&apos;s resilience with real-world DDoS simulations and fortify your defenses.
                </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6 md:mt-0">
                <a href="#" className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-500 transition-transform transform hover:scale-110">
                    <FaFacebookF size={20} />
                </a>
                <a href="#" className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-300 transition-transform transform hover:scale-110">
                    <FaTwitter size={20} />
                </a>
                <a href="#" className="bg-blue-700 p-3 rounded-full text-white hover:bg-blue-600 transition-transform transform hover:scale-110">
                    <FaLinkedinIn size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-transform transform hover:scale-110">
                    <FaGithub size={20} />
                </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500 mt-6 md:mt-0">© 2025 ShieldBot. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
