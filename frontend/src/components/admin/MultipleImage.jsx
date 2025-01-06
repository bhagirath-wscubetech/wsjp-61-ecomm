"use client";
import { axiosInstance } from '@/library/helper';
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr'

export default function MultipleImage({ other_images, name, product_id }) {
    const [images, setImages] = useState(other_images);
    const [flag, setFlag] = useState(false);


    const submitHandler = async (e) => {
        e.preventDefault();
        const other_images = e.target.other_images.files;
        const formData = new FormData();
        for (let otherImage of other_images) {
            formData.append('other_images', otherImage);
        }
        axiosInstance.post(`/product/upload-other-images/${product_id}`, formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 ${flag ? 'flex' : 'hidden'} flex-col items-center justify-center z-50`}>
                <div className="bg-white shadow p-3 w-[60%] h-[80%]">
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold'>Other Images of {name}</h1>
                        <FaTimes onClick={() => setFlag(false)} className='cursor-pointer my-3' fontSize={20} />
                    </div>
                    {
                        images.length === 0
                            ? <p className='text-center'>No images found</p>
                            : <div className="flex gap-4">
                                {images.map((image, index) => (
                                    <div className='border p-3'>
                                        <img key={index} src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/product/other-images/${image}`} width={150} height={150} alt="" />
                                    </div>
                                ))}
                            </div>
                    }
                </div>
                <div className="bg-white shadow p-3 w-[60%] flex gap-3">
                    <form onSubmit={submitHandler}>
                        <input name='other_images' type='file' multiple className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 mb-3 rounded focus:outline-none focus:shadow-outline"> Upload </button>
                    </form>
                </div>
            </div>
            <GrGallery className='cursor-pointer' onClick={() => setFlag(true)} />
        </>
    )
}
