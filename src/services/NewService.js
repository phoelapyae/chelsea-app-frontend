import apiClient from './index.js';

export default {
    getCategories() {
        return apiClient.get('/categories')
    },
    getNews(category_id) {
        return apiClient.get('/news?category_id=' + category_id)
    }
}