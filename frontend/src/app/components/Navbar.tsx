"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 text-gray-900 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">


                <Link href="/" className="text-2xl font-bold tracking-wide flex items-center gap-2">
                    🚀 Crypto Price Tracker
                </Link>


                <div className="hidden md:flex space-x-6 text-lg">
                    <Link href="/" className="hover:text-gray-700 transition">Home</Link>
                    <Link href="/dashboard" className="hover:text-gray-700 transition">Dashboard</Link>
                </div>


                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-900 focus:outline-none"
                >
                    {isOpen ? "✖️" : "☰"}
                </button>
            </div>


            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                <div className="flex flex-col space-y-4 px-6 pb-4 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600">
                    <Link href="/" className="hover:text-gray-700 transition">Home</Link>
                    <Link href="/dashboard" className="hover:text-gray-700 transition">Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
