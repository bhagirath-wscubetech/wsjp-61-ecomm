import Link from 'next/link';
import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/" className="hover:text-gray-300">
                        EcomShop
                    </Link>
                </div>
                <nav className="flex space-x-4">
                    <Link href="/shop" className="hover:text-gray-300">Shop
                    </Link>
                    <Link href="/about" className="hover:text-gray-300">About
                    </Link>
                    <Link href="/contact" className="hover:text-gray-300">Contact
                    </Link>
                </nav>
                <div className="flex space-x-4">
                    <a href="/cart" className="hover:text-gray-300 flex items-center">
                        <FaShoppingCart className="mr-1" /> Cart
                    </a>
                    <a href="/account" className="hover:text-gray-300 flex items-center">
                        <FaUser className="mr-1" /> Account
                    </a>
                </div>
            </div>
        </header >
    );
};

export default Header;