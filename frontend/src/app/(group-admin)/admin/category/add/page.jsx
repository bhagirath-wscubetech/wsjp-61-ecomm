"use client";
import PageHeader from "@/components/admin/PageHeader";
import { axiosInstance, titleToSlug } from "@/library/helper";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const AddCategory = () => {
    const name = useRef(null);
    const slug = useRef(null);
    const [nameError, setNameError] = useState(false);

    const nameChangeHandler = () => {
        axiosInstance.get(`/category/category-exists/${name.current.value}`)
            .then(
                (response) => {
                    if (response.data.flag == 0) {
                        setNameError(true);
                    } else {
                        setNameError(false);
                    }
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            )

        slug.current.value = titleToSlug(name.current.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name: name.current.value,
            slug: slug.current.value
        }
        console.log(data);

        // API call to add category
        axiosInstance.post(`/category/create`, data)
            .then(
                (response) => {
                    if (response.data.flag == 1) {
                        e.target.reset();
                        toast.success(response.data.message);
                    } else {
                        toast.error(response.data.message);
                    }
                }
            ).catch(
                (error) => {
                    console.log(error.message);
                    // console.log(error);
                }
            )
    }


    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <PageHeader breadcrums={["Dashboard", "Category", "Add"]}
                    button={{ text: "Back to view", url: "/admin/category" }} />
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-800">Add New Category</h2>
                    </div>
                    <form onSubmit={submitHandler} className="w-full !bg-white shadow-lg p-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-2">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                    Category Name
                                </label>
                                <input
                                    onChange={nameChangeHandler}
                                    ref={name}
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    placeholder="Enter category name"
                                />
                                <span className="text-red-500">
                                    {nameError && "Category name already exists"}
                                </span>
                            </div>
                            <div className="mb-2">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="slug">
                                    Category Slug
                                </label>
                                <input
                                    ref={slug}
                                    readOnly={true}
                                    type="text"
                                    id="slug"
                                    name="slug"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    placeholder="Enter category slug"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                disabled={nameError}
                                type="submit"
                                className="shadow bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-6 rounded disabled:opacity-[0.3]"
                            >
                                Add Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;

