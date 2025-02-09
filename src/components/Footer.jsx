import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 text-center flex flex-col items-center shadow-lg border-t border-gray-700 w-full">
            <h3 className="text-2xl font-bold text-blue-400 tracking-wide">ShieldBot</h3>
            <p className="text-lg text-gray-300 max-w-lg mt-3 leading-relaxed text-center px-4">
                Test your website’s resilience with real-world DDoS simulations and fortify your defenses.
            </p>
            <div className="flex space-x-6 mt-6 flex-wrap justify-center">
                <a href="#" className="hover:text-blue-500 transition-transform transform hover:scale-110">
                    <Facebook size={28} />
                </a>
                <a href="#" className="hover:text-blue-400 transition-transform transform hover:scale-110">
                    <Twitter size={28} />
                </a>
                <a href="#" className="hover:text-blue-700 transition-transform transform hover:scale-110">
                    <Linkedin size={28} />
                </a>
                <a href="#" className="hover:text-gray-300 transition-transform transform hover:scale-110">
                    <Github size={28} />
                </a>
            </div>
            <p className="text-sm text-gray-500 mt-6 px-4 text-center">© 2025 ShieldBot. All rights reserved.</p>
        </footer>
    );
};

export default Footer;