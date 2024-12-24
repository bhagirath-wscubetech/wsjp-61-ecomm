import axios from 'axios';

const getCategories = () => {
    return axios.get('http://localhost:5000/category')
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

export { getCategories };