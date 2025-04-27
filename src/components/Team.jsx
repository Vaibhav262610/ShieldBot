"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const ShootingStar = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            return new Array(10).fill(0).map((_, i) => ({
                left: Math.random() * 100 + "vw",
                id: i,
                top: Math.random() * 100 + "vh",
                duration: Math.random() * 3 + 2
            }));
        };
        setStars(generateStars());
    }, []);

    return (
        <>
            {stars.map(star => (
                <motion.div
                    key={star.id}
                    className="absolute w-1 h-1 bg-white rounded-full shadow-lg"
                    style={{ left: star.left, top: star.top }}
                    animate={{
                        x: [0, -200],
                        y: [0, 200],
                        opacity: [1, 0]
                    }}
                    transition={{ duration: star.duration, repeat: Infinity, ease: "linear" }}
                />
            ))}
        </>
    );
};

const teamMembers = [
    {
        name: "Shashank Kumar",
        role: "DevOps",
        image: "https://avatars.githubusercontent.com/u/109029541?v=4",
        insta: "https://instagram.com/",
        github: "https://github.com/shashank77665",
        linkedin: "https://linkedin.com/in/",
    },
   
    {
        name: "Paras Saini",
        role: "Backend Engineer",
        image: "https://avatars.githubusercontent.com/u/126291053?v=4",
        insta: "https://instagram.com/",
        github: "https://github.com/Paras-17",
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Dashrath Nandan",
        role: "UI/UX Designer",
        image: "/member4.jpg",
        insta: "https://instagram.com/",
        github: "https://github.com/Dashrath2613",
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Yash Chauhan",
        role: "Documentation",
        image: "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png",
        insta: "#",
        github: "#",
        linkedin: "#",
    },
    {
        name: "Hritika Singh",
        role: "Documentation",
        image: "https://cdn-icons-png.flaticon.com/512/2922/2922725.png",
        insta: "#",
        github: "#",
        linkedin: "#",
    },
];

const TeamCard = ({ member }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const x = (clientX - left - width / 2) / 25; // Adjust for sensitivity
        const y = -(clientY - top - height / 2) / 25;

        setRotate({ x, y });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <motion.div
            className="bg-white/10 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center w-72 transition-all"
            style={{
                transform: `perspective(500px) rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
                transition: "transform 0.2s ease-out",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Profile Image */}
            <div className="w-72 h-72 p-4 overflow-hidden rounded-lg">
                <img src={member.image} alt={member.name} className="w-full border border-white h-full rounded-lg object-cover" />
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
        </motion.div>
    );
};

const Team = () => {
    return (
        <div id="team" className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 py-12 overflow-hidden">

            {/* Shooting Stars (Only Inside Team Section) */}
            <ShootingStar />

            <h1 className="text-5xl font-bold text-white mb-20">Our Team 😎</h1>

            <div className="flex flex-wrap justify-center gap-10">
                {teamMembers.map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
};

export default Team;
