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


export { getCategories, getTrashedCategories, getCategoryById };