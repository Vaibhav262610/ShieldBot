"use client";
import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/LoadingContext";

const DelayedLink = ({ href, children, delay = 700, className }) => {
    const router = useRouter();
    // const { setLoading } = useLoading();

    const handleClick = (e) => {
        e.preventDefault(); // Prevent immediate navigation
        // setLoading(true);
        setTimeout(() => {
            router.push(href); // Navigate after delay
        }, delay);
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
};

export default DelayedLink;
