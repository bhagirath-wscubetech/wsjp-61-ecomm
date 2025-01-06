"use client";

import { axiosInstance } from '@/library/helper';
import React from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { TbRestore } from "react-icons/tb";


export default function RestoreBtn({ endpoint }) {
    const router = useRouter();
    const restoreHandler = () => {
        axiosInstance.patch(endpoint)
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
            <TbRestore className='cursor-pointer' onClick={restoreHandler} />
        </>
    )
}
