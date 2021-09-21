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
    }
}