import React from 'react';
import { FaFilter, FaShoppingCart } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const ShopPage = () => {
    return (
        <div className="flex min-h-screen">
            {/* Left Sidebar for Filters */}
            <div className="w-1/3 p-4 bg-gray-100">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <FaFilter className="mr-2" /> Filters
                </h2>
                {/* Add your filter components here */}
                <div className="mb-4">
                    <label className="block mb-2">Category</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                        <option>All</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Home</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Price Range</label>
                    <input type="range" className="w-full" />
                </div>
                {/* Add more filters as needed */}
            </div>

            {/* Right Sidebar for Product Listing */}
            <div className="w-2/3 p-4">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <FaShoppingCart className="mr-2" /> Products
                </h2>
                {/* Add your product listing components here */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Example Product Card */}
                    <div className="border border-gray-300 p-4 rounded">
                        <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-lg font-bold">Product Name</h3>
                        <p className="text-gray-600">$99.99</p>
                    </div>
                    {/* Repeat for more products */}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;