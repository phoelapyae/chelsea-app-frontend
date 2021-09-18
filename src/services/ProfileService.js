import apiClient from "./index.js";

export default {
  updateUserProfile(credentials) {
    // let user = JSON.parse(localStorage.getItem('user'));
    return apiClient.post('/update-profile', credentials)
  },
  uploadPhoto(file) {
    return apiClient.post('/upload-avatar',file)
  }
};
