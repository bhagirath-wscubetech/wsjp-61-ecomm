"use client";

import { axiosInstance } from '@/library/helper';
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function DeleteBtn({ endpoint }) {
    const router = useRouter();
    const deleteHandler = () => {
        axiosInstance.delete(endpoint)
            .then(
                (response) => {
                    if (response.data.flag == 1) {
                        router.refresh();
                        toast.success(response.data.message);
                    } else {
                        toast.error(response.data.message);
                    }
                }
            ).catch(
                (error) => {
                    toast.error(response.data.message);
                }
            )
    }
    return (
        <>
            <FaTrashAlt className='cursor-pointer' onClick={deleteHandler} />
        </>
    )
}
