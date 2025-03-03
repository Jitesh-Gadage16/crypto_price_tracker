"use client";

import { useCryptoData } from "../hooks/useCryptoData";
import { useState } from "react";
import SearchBar from "./SearchBar";
import RefreshButton from "./RefreshButton";

const CryptoList = () => {
    const { data, isLoading, isError, refetch } = useCryptoData();
    const [searchQuery, setSearchQuery] = useState("");

    if (isLoading) {
        return (
            <div className="container mx-auto px-6 py-10">
                <h2 className="text-xl font-bold text-center mb-4 text-gray-800">Fetching Prices...</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 animate-pulse h-24 rounded-lg"></div>
                    ))}
                </div>
            </div>
        );
    }

    if (isError) {
        return <div className="text-center text-red-600 text-lg font-semibold mt-6">❌ Error fetching data. Try again later.</div>;
    }

    const cryptocurrencies = Object.keys(data || {}).filter((crypto) =>
        crypto.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-6 py-10">

            <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 text-transparent bg-clip-text">
                Crypto Price Tracker 🚀
            </h1>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <SearchBar onSearch={setSearchQuery} />
                <RefreshButton onRefresh={refetch} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {cryptocurrencies.length > 0 ? (
                    cryptocurrencies.map((crypto) => (
                        <div
                            key={crypto}
                            className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-gray-100 via-gray-300 to-gray-400 hover:shadow-xl transition duration-300"
                        >
                            <h2 className="text-xl font-semibold text-gray-800">{crypto}</h2>
                            <p className="text-2xl font-bold text-gray-900">${data[crypto].usd.toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600 text-lg font-medium">No results found.</p>
                )}
            </div>
        </div>
    );
};

export default CryptoList;
