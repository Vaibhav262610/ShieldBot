export default function page() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4 w-80">
                <img
                    src="https://via.placeholder.com/80"
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-2 border-white shadow-md"
                />
                <h2 className="text-white text-lg font-semibold">Username</h2>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                    Logout
                </button>
            </div>
        </div>
    );
}
