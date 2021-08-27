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
    },
    getTeams(team_type_id,work_type_id) {
        return apiClient.get('/teams?team_type_id=' + team_type_id + '&work_type_id=' + work_type_id)
    }
}