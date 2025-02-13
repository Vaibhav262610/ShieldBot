"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    const triggerLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1200);
    };

    useEffect(() => {
        triggerLoading();
    }, [pathname]);

    useEffect(() => {
        const handlePopState = () => {
            triggerLoading();
        };

        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            <AnimatePresence mode="wait">
                {loading && <PageTransition />}
            </AnimatePresence>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);

const PageTransition = () => {
    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                backgroundColor: "#121212", // Dark theme-friendly background
                zIndex: 1000,
            }}
        >
            <motion.div
                className="text-white text-4xl font-bold tracking-widest"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}


            >
                LOADING...
            </motion.div>
        </motion.div>
    );
};
