"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "What is ShieldBot?",
        answer: "ShieldBot is a cybersecurity tool that simulates real-world DDoS attacks to test and enhance website resilience.",
    },
    {
        question: "How does ShieldBot protect my website?",
        answer: "ShieldBot runs controlled attack simulations, helping you identify weaknesses and implement better security measures.",
    },
    {
        question: "Is ShieldBot safe to use?",
        answer: "Yes! Our tests are non-destructive and are performed only with proper authorization.",
    },
    {
        question: "Can I customize attack simulations?",
        answer: "Absolutely! You can customize attack types, intensity, and duration according to your needs.",
    },
    {
        question: "What pricing plans are available?",
        answer: "We offer flexible pricing plans, including free trials, monthly subscriptions, and enterprise solutions.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="faq" className="border-t border-b border-white/70 min-h-screen bg-gradient-to-b from-[#0f172a]/40 to-[#1e293b]/40 text-white flex flex-col items-center justify-center py-16 px-6">
            <h2 className="text-5xl font-bold text-blue-400 mb-12 tracking-wide">Frequently Asked Questions ❓</h2>

            <div className="w-full max-w-2xl space-y-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-[#1e293b] p-6 rounded-lg shadow-lg border border-gray-700 transition-all hover:bg-[#334155] hover:shadow-blue-500/10"
                    >
                        <button
                            className="flex justify-between items-center w-full text-left text-xl font-semibold text-white"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <FaChevronDown
                                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-400" : "text-gray-400"
                                    }`}
                            />
                        </button>

                        {openIndex === index && (
                            <motion.p
                                className="mt-3 text-gray-300 text-lg leading-relaxed"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                {faq.answer}
                            </motion.p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
