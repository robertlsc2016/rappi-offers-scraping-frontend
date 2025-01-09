import axios from "axios";
const Axios = axios.create({
  baseURL:
    process.env.NODE_ENV == "production"
      ? process.env.REACT_APP_API_URL
      : `http://localhost:4000/store/`,
});

export default Axios;
