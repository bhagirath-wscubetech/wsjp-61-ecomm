import Link from 'next/link'
import React from 'react'


export default function PageHeader({ breadcrums, button, trash }) {
    return (
        <div className='my-4 flex justify-between items-center'>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    {
                        breadcrums.map(
                            (breadcrum, index) => {
                                return (
                                    <li key={index} className="inline-flex items-center">
                                        <svg
                                            style={{ display: index == 0 && 'none' }}
                                            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m1 9 4-4-4-4"
                                            />
                                        </svg>

                                        <div
                                            href="#"
                                            className={`inline-flex items-center text-sm font-medium text-gray-700 ${index == breadcrums.length - 1 && 'text-blue-600'} hover:text-blue-600 dark:text-gray-400 dark:hover:text-white`}
                                        >
                                            {breadcrum}
                                        </div>
                                    </li>
                                )
                            }
                        )
                    }

                </ol>
            </nav>
            <div>
                {
                    trash?.link != undefined
                    &&
                    <Link
                        className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                        href={trash.link}>
                        View Trash Bin
                    </Link>
                }
                <Link
                    className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                    href={button.url}>
                    {button.text}
                </Link>
            </div>
        </div >
    )
}
