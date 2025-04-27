"use client";

import ProtectedPage from "@/components/ProtectedPage";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// import { useLoading } from "@/contexts/LoadingContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiHome, FiGrid, FiUser, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";

const Dashboard = () => {
    // const { setLoading } = useLoading();
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("Layer 4");
    const [menuOpen, setMenuOpen] = useState(false);
    // const [profileOpen, setProfileOpen] = useState(false); // Profile Modal State

    const attackData = [
        { time: "10:00", requests: 120, crashed: 2 },
        { time: "10:05", requests: 200, crashed: 5 },
        { time: "10:10", requests: 340, crashed: 10 },
        { time: "10:15", requests: 500, crashed: 18 },
        { time: "10:20", requests: 700, crashed: 25 },
    ];

    const statusData = [
        { status: "Running", count: 5 },
        { status: "Pending", count: 3 },
        { status: "Stopped", count: 2 },
    ];
    const handleLogout = () => {
        // setLoading(true);  // Sho    w loading screen

        localStorage.clear(); // Clear stored data
        toast.success("Successfully logged out!"); // Show success message

        setTimeout(() => {
            router.push("/");
        }, 1500);

    };

    const user = {
        name: "John Doe",
        profilePic: "https://i.pravatar.cc/100", // Replace with actual profile picture URL
    };

    return (
        // <ProtectedPage>

        <div className="flex h-screen w-full bg-[#0f172a] text-white">
            <Toaster position="top-right" reverseOrder={false} />
            {/* Mobile Navbar */}
            <nav className="fixed top-5 left-0 w-full bg-[#1a1d29] p-4 flex items-center justify-between md:hidden z-50">
                <h2 className="text-xl font-semibold text-blue-400">ShieldBot</h2>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl">
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Sidebar (Hidden on Mobile, Shown on Desktop) */}
            <aside
                className={`fixed md:relative top-0 left-0 w-full md:w-24 h-full bg-[#1a1d29] flex flex-col items-center py-10 border-r border-white/10 transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 z-40`}
            >
                <Link href="/">
                    <div className="text-blue-400 text-3xl font-bold">SB</div>
                </Link>

                <div className="flex flex-col flex-1 items-center justify-center space-y-10 mt-4">
                    <Link href='/'>
                        <FiHome className="text-3xl cursor-pointer hover:text-blue-400" />
                    </Link>
                    <FiGrid className="text-5xl cursor-pointer bg-blue-600 p-3 rounded-xl" />
                    {/* <Link href='/dashboard/profile'>
                    </Link> */}
                    <Dialog>
                        <DialogTrigger>
                            <FiUser className="text-3xl cursor-pointer hover:text-blue-400" />
                        </DialogTrigger>
                        <DialogContent className="bg-[#1a1d29] text-white p-6 rounded-2xl w-[350px] flex flex-col items-center">
                            <DialogHeader className="text-center">
                                <DialogTitle className="text-xl font-semibold text-blue-400">
                                    {user.name}
                                </DialogTitle>
                            </DialogHeader>
                            <img
                                src={user.profilePic}
                                alt="Profile"
                                className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg mt-2"
                            />
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-xl text-md w-full mt-4 transition duration-300 flex items-center justify-center gap-2">
                                <FiLogOut /> Logout
                            </button>
                        </DialogContent>
                    </Dialog>

                </div>

                <div className="pb-10">
                    <FiLogOut onClick={handleLogout} className="text-3xl cursor-pointer hover:text-red-500" />
                </div>
            </aside>
            {/* Profile Modal Overlay */}
            {/* Profile Modal Overlay */}



            {/* Main Content */}
            <div className="flex-1 flex flex-col p-4 md:p-6 mt-24 md:mt-0">
                {/* Top Bar */}
                <div className="flex flex-wrap justify-between items-center bg-[#1a1d29] p-4 md:p-5 rounded-2xl shadow-lg">
                    <h2 className="text-xl md:text-2xl font-semibold">Manage Attacks</h2>
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-2 md:py-3 rounded-xl text-md md:text-lg">
                        Update
                    </button>
                </div>

                {/* Attack Management */}
                <div className="flex flex-col md:flex-row mt-4 md:mt-6 gap-4 md:gap-6">
                    {/* Left Panel */}
                    <div className="bg-[#1a1d29] p-4 md:p-6 rounded-2xl shadow-lg w-full md:w-1/3 space-y-4 md:space-y-6">
                        <div className="flex space-x-2 md:space-x-4">
                            <button
                                className={`px-4 md:px-6 py-2 md:py-3 text-md md:text-lg rounded-xl ${activeTab === "Layer 4" ? "bg-blue-600" : "bg-gray-700"}`}
                                onClick={() => setActiveTab("Layer 4")}
                            >System 1</button>
                            <button
                                className={`px-4 md:px-6 py-2 md:py-3 text-md md:text-lg rounded-xl ${activeTab === "Layer 7" ? "bg-blue-600" : "bg-gray-700"}`}
                                onClick={() => setActiveTab("Layer 7")}
                            >System 2</button>
                        </div>

                        <select className="w-full bg-gray-800 p-3 md:p-4 rxounded-xl text-md md:text-lg">
                            <option>GRE (Raw L3 GRE flood)</option>
                        </select>

                        <div>
                            <label className="text-gray-400 text-md md:text-lg">URL</label>
                            <input type="text" placeholder="ex: 1.1.1.1" className="w-full bg-gray-800 p-3 md:p-4 rounded-xl mt-2 text-md md:text-lg" />
                        </div>

                        <div>
                            <label className="text-gray-400 text-md md:text-lg">Workers</label>
                            <input type="number" defaultValue="15" className="w-full bg-gray-800 p-3 md:p-4 rounded-xl mt-2 text-md md:text-lg" />
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 md:py-4 rounded-xl text-md md:text-lg">
                            Launch Attack
                        </button>
                    </div>

                    {/* Right Panel with Graphs */}
                    <div className="flex-1 bg-[#1a1d29] p-4 md:p-6 rounded-2xl shadow-lg flex flex-col">
                        <h3 className="text-lg md:text-xl text-gray-400 mb-2 md:mb-4">Attack Statistics</h3>

                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={attackData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="time" stroke="#e5e7eb" />
                                <YAxis stroke="#e5e7eb" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="requests" stroke="#3b82f6" strokeWidth={3} />
                                <Line type="monotone" dataKey="crashed" stroke="#ef4444" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>

                        <h3 className="text-lg md:text-xl text-gray-400 mt-4 md:mt-6 mb-2 md:mb-4">Attack Status</h3>
                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={statusData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="status" stroke="#e5e7eb" />
                                <YAxis stroke="#e5e7eb" />
                                <Tooltip />
                                <Bar dataKey="count" fill="#3b82f6" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
        // </ProtectedPage>
    );
};

export default Dashboard;
