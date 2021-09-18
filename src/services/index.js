import axios from "axios";

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

export default apiClient;
