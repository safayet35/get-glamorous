import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://get-glamorous-api.vercel.app/api/v1",
  headers: { "Content-Type": "application/json" }
});

export default axiosInstance;
