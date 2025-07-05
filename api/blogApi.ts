import axios from "axios";
export const baseUrl = "http://localhost:3020"
export const blogApi = axios.create({
    baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})