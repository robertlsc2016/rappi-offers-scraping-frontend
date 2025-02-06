import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro interceptado:", error);
  }
);

export default Axios;
