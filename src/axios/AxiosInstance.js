import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1", // use your backend URL
  withCredentials: true, // crucial for cookie-based auth
});

export default api;
