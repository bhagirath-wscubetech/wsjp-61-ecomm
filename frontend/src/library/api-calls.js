import axios from 'axios';
import { axiosInstance } from './helper';



const getCategories = () => {
    return axiosInstance.get(`/category`)
        .then(
            (response) => {
                return response.data.categories;
            }
        ).catch(
            () => {
                return [];
            }
        )
}
const getCategoryById = (id) => {
    return axiosInstance.get(`/category/${id}`)
        .then(
            (response) => {
                return response.data.category;
            }
        ).catch(
            () => {
                return [];
            }
        )
}
const getColors = () => {
    return axiosInstance.get(`/color`)
        .then(
            (response) => {
                return response.data.colors;
            }
        ).catch(
            () => {
                return [];
            }
        )
}
const getProducts = () => {
    return axiosInstance.get(`/product`)
        .then(
            (response) => {
                return response.data.products;
            }
        ).catch(
            () => {
                return [];
            }
        )
}
const getProductById = (id) => {
    return axiosInstance.get(`/product/${id}`)
        .then(
            (response) => {
                return response.data.product;
            }
        ).catch(
            () => {
                return [];
            }
        )
}

const getTrashedCategories = () => {
    return axiosInstance.get("/category/get-trashed")
        .then(
            (response) => {
                return response.data.categories;
            }
        ).catch(
            () => {
                return [];
            }
        )
}


export { getCategories, getColors, getProducts, getProductById, getTrashedCategories, getCategoryById };