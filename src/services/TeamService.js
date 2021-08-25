import apiClient from './index.js';

export default {
    getPositions() {
        return apiClient.get('/positions')
    },
    getWorkTypes() {
        return apiClient.get('/work-types')
    },
    getTeamTypes() {
        return apiClient.get('/team-types')
    }
}