import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Ecom Website</h2>
                        <p className="mb-4">Your one-stop shop for all your needs. Quality products at the best prices.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="mb-2">123 Ecom St, Suite 100</p>
                        <p className="mb-2">City, State, 12345</p>
                        <p className="mb-2">Email: support@ecomwebsite.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Ecom Website. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;