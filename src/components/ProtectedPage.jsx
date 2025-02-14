import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectedPage = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login"); // Redirect to login if not authenticated
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) return <p>Loading...</p>; // Show loading until check is complete

    return <>{children}</>;
};

export default ProtectedPage;
