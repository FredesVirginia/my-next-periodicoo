
import { ACCESS_TOKEN_KEY } from "@/pages/login";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
// export const baseUrl = "http://localhost:3020"
export const baseUrl ="https://my-nest-periodico-back-1.onrender.com"
export const blogApi = axios.create({
    baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})



blogApi.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + secureLocalStorage.getItem(ACCESS_TOKEN_KEY);
  return config;
});

blogApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log('error ==>', error.response)
    // Si recibimos un código 403 (Prohibido), recargamos la página
    if (
      (error.response && error.response.status === 403 && error.response.data.code === "token_not_valid") ||
      error.response.status === 401
    ) {
      localStorage.clear();
      //const navigate = useNavigate(); // Obtén el hook
      //navigate("/login"); // Redirige al login
     window.location.href = '/login';

    }
    // Retornamos el error para que pueda ser manejado por el código que llamó a la API
    return Promise.reject(error);
  }
);