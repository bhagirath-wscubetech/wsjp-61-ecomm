import React from 'react';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-6 py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome to Ecomm</h1>
                    <p className="mt-4 text-gray-600">Find the best products at the best prices</p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example product card */}
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800">Product 1</h2>
                            <p className="mt-2 text-gray-600">$99.99</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800">Product 2</h2>
                            <p className="mt-2 text-gray-600">$89.99</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800">Product 3</h2>
                            <p className="mt-2 text-gray-600">$79.99</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800">Product 4</h2>
                            <p className="mt-2 text-gray-600">$69.99</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800">Product 5</h2>
                            <p className="mt-2 text-gray-600">$59.99</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800">Product 6</h2>
                            <p className="mt-2 text-gray-600">$49.99</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;