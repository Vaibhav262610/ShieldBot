"use client";

import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
    {
        name: "Vaibhav Rajpoot",
        role: "Full-Stack Developer",
        image: "https://avatars.githubusercontent.com/u/76393163?v=4", // Placeholder image
        insta: "https://instagram.com/",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Shashank Kumar",
        role: "DevOps",
        image: "https://avatars.githubusercontent.com/u/109029541?v=4",
        insta: "https://instagram.com/",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Paras Saini",
        role: "Backend Engineer",
        image: "https://avatars.githubusercontent.com/u/126291053?v=4",
        insta: "https://instagram.com/",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Dashrath Nandan",
        role: "Frontend Developer",
        image: "https://img.freepik.com/free-vector/blonde-boy-blue-hoodie_1308-175828.jpg",
        insta: "https://instagram.com/",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
    },
];

const Team = () => {
    return (
        <div id="team" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
            <h1 className="text-5xl font-bold text-white mb-20"> Our Team 😎</h1>

            <div className="flex flex-wrap justify-center gap-10">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white/10 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center w-72 "
                    >
                        {/* Profile Image */}
                        <div className="w-42 h-42 overflow-hidden rounded-lg shadow-md">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>

                        <h2 className="text-2xl font-semibold text-white mt-4">{member.name}</h2>
                        <p className="text-md text-gray-300 mb-4">{member.role}</p>

                        {/* Social Icons */}
                        <div className="flex gap-4 text-xl">
                            <a href={member.insta} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition">
                                <FaInstagram />
                            </a>
                            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition">
                                <FaGithub />
                            </a>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
