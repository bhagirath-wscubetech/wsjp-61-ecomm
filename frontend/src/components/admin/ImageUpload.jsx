"use client";
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export default function ImageUpload({ isMulti,onImageSelect }) {
    const [previewSrc, setPreviewSrc] = useState(null);
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        if (file) {
            onImageSelect(file);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result);
                setPreviewSrc(e.target.result);
            }
        }
        // Do something with the files
    }, [])

    const removeHandler = (e) => {
        e.stopPropagation();
        onImageSelect(null);
        setPreviewSrc(null);
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    // console.log("inp",getInputProps());
    // console.log("root",getRootProps());

    return (
        <div className='border mb-4 p-3 cursor-pointer hover:shadow' {...getRootProps()}>
            <input {...getInputProps()} multiple={isMulti} accept={"image/png, image/jpg, image/jpeg"} />
            {
                previewSrc == null
                    ? isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    :
                    <div className='flex items-center flex-col'>
                        <img width={400} height={250} src={previewSrc} />
                        <button onClick={removeHandler} className="my-3 p-1 hover:bg-black hover:text-white border">Remove</button>
                    </div>
            }
        </div>
    )
}
