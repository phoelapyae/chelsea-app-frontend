import apiClient from './index.js';

export default {
    paymentTypes(){
        return apiClient.get('/payments')
    },
    paymentSteps() {
        return apiClient.get('/buy-packages/steps')
    }
}