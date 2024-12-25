import axios from 'axios';



const getCategories = () => {
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/category`)
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