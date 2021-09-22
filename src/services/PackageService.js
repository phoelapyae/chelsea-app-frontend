import apiClient from './index.js';

export default {
    getBenefits() {
        return apiClient.get("/benefits");
    },
    getPackages() {
        return apiClient.get("/buy-packages");
    },
    packageDetail(package_id) {
        return apiClient.get('/buy-packages/detail/'+package_id)
    },
    addPackageToCart(credentials) {
        return apiClient.post('/buy-packages/add-to-cart', credentials)
    },
    orderPackage(credentials) {
        return apiClient.post('/buy-packages/order', credentials)
    },
    confirmOrderPackage(order_id) {
        return apiClient.post('/buy-packages/confirm-order', order_id)
    }
}