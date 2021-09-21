import axios from "axios";
import NProgress from 'nprogress';

let access_token = null;

let user = JSON.parse(localStorage.getItem('user'))

if (user) {
  access_token = `Bearer ${user.access_token}`
}

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": access_token
  },
});

apiClient.interceptors.request.use(request => {
    NProgress.start()
    return request
})

apiClient.interceptors.response.use(response => {
    NProgress.done()
    return response
})

export default apiClient;
