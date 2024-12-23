import React from 'react';
import { FaChartLine, FaShoppingCart, FaUsers } from 'react-icons/fa';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5 flex items-center">
                            <FaChartLine className="text-gray-500 text-3xl mr-4" />
                            <div>
                                <div className="text-sm font-medium text-gray-500 truncate">Total Sales</div>
                                <div className="mt-1 text-3xl font-semibold text-gray-900">$24,000</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5 flex items-center">
                            <FaShoppingCart className="text-gray-500 text-3xl mr-4" />
                            <div>
                                <div className="text-sm font-medium text-gray-500 truncate">Total Orders</div>
                                <div className="mt-1 text-3xl font-semibold text-gray-900">1,200</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5 flex items-center">
                            <FaUsers className="text-gray-500 text-3xl mr-4" />
                            <div>
                                <div className="text-sm font-medium text-gray-500 truncate">Total Customers</div>
                                <div className="mt-1 text-3xl font-semibold text-gray-900">3,400</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
                            <table className="min-w-full mt-4">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#12345</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$150.00</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Pending</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#12346</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jane Smith</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$200.00</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Completed</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;