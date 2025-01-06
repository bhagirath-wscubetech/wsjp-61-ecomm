import Link from 'next/link';
import React from 'react';
import { FaHome, FaUser, FaBox, FaChartBar, FaCog, FaLayerGroup } from 'react-icons/fa';

const SideBar = () => {
    const menuItems = [
        { name: 'Dashboard', icon: <FaHome />, path: '/admin' },
        { name: 'Users', icon: <FaUser />, path: '/admin/user' },
        { name: 'Categoies', icon: <FaLayerGroup />, path: '/admin/category' },
        { name: 'Products', icon: <FaBox />, path: '/admin/product' },
        { name: 'Reports', icon: <FaChartBar />, path: '/admin/report' },
        { name: 'Settings', icon: <FaCog />, path: '/admin/setting' },
    ];

    return (
        <div className="min-h-screen bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-2xl font-bold">Admin Panel</div>
            <nav className="flex-1">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} className="hover:bg-gray-700">
                            <Link href={item.path} className="flex items-center p-4">
                                <span className="mr-3">{item.icon}</span>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;