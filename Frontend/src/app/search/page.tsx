'use client'; // This line marks the component as a Client Component
import { useState } from 'react';
import { redirect } from "next/navigation";
import Link from 'next/link'; // Using Next.js Link for client-side navigation

export default function Search() {
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(5);

    const handleSubmit = (event:any) => {
        event.preventDefault();
        const name = event.target.name.value;
        if (minPrice > maxPrice) {
            alert('Minimum price should be less than or equal to maximum price.');
            return;
        }
        // Assuming the redirect function is part of your utilities to handle redirection
        redirect(`/searchresults/${name}?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    };

    return (
        <main className="text-center p-5">
            <h1 className="text-5xl font-medium p-10">Search Your Restaurants</h1>
            <form onSubmit={handleSubmit} className="w-[100%] flex flex-col items-center space-y-4 pt-13 bg-white">
                    <div className="flex items-center w-1/2 my-2 p-5">
                    <input type="text" id="name" name="name" placeholder="Search Restaurants"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2
                    text-gray-700 focus:outline-none focus:border-blue-400"/>
                    <select value={minPrice} onChange={(e) => setMinPrice(parseInt(e.target.value))}
                            className="bg-white border-2 border-gray-200 rounded w-40 p-2
                            text-gray-700 focus:outline-none focus:border-blue-400">
                        {[1, 2, 3, 4, 5].map(value => (
                            <option key={value} value={value}>Min Price {value}</option>
                        ))}
                    </select>
                    <select value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                            className="bg-white border-2 border-gray-200 rounded w-40 p-2
                            text-gray-700 focus:outline-none focus:border-blue-400">
                        {[1, 2, 3, 4, 5].map(value => (
                            <option key={value} value={value}>Max Price {value}</option>
                        ))}
                    </select>
                    </div>
               
                <button type="submit" className="block rounded-md bg-red-800 hover:bg-red-400 px-3 py-2 text-white">Search</button>
            </form>
        </main>
    );
}
