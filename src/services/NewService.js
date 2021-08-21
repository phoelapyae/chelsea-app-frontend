import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
});

export default {
    getCategories() {
        return apiClient.get('/categories')
    },
    getNews(category_id) {
        return apiClient.get('/news?category_id=' + category_id)
    }
}