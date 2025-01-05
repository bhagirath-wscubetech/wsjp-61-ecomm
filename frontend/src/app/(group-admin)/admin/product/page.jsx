import DeleteBtn from '@/components/admin/DeleteBtn';
import PageHeader from '@/components/admin/PageHeader';
import ToggleStatus from '@/components/admin/ToggleStatus';
import { getProducts } from '@/library/api-calls';
import { timeAgo } from '@/library/helper';
import Link from 'next/link';
import React from 'react';
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa';

const ProductPage = async () => {
    const products = await getProducts();

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <PageHeader breadcrums={["Dashboard", "Product"]}
                    button={{ text: "Add", url: "/admin/product/add" }}
                    trash={{ link: "/admin/product/trash" }}
                />
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Sr.
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Name / Slug
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Thumbnail
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Timestamps
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Category / Colors
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={product.id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {index + 1}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {product.name}
                                            <br />
                                            {product.slug}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <del> ₹ {product.original_price} </del>
                                            <br />
                                            ₹ {product.discounted_price}
                                            <br />
                                            {product.discount_percentage}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <img width={100} src={`http://localhost:5000/images/product/${product.main_image}`} alt="" />
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <ToggleStatus endpoint={`/product/change-status/${product._id}/`} current_status={product.status} />
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            Created At: {timeAgo(product.createdAt)} <br />
                                            Updated At: {timeAgo(product.updatedAt)}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <b>Category:</b> {product.category.name} <br/>
                                            <b>Colors:</b>
                                            <ul>
                                                {product.colors.map(
                                                    (color) => {
                                                        return <li>{color.name}</li>
                                                    }
                                                )}
                                            </ul>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                            <div className='flex gap-3'>
                                                <DeleteBtn endpoint={`/product/move-to-trash/${product._id}`} />

                                                <Link href={`/admin/product/edit/${product._id}`}>
                                                    <FaPenAlt />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;