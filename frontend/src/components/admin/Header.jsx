import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <FaUserCircle className="text-3xl mr-2" />
                <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
            <button className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <AiOutlineLogout className="mr-2" />
                Logout
            </button>
        </header>
    );
};

export default Header;