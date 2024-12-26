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


export { getCategories,getTrashedCategories };