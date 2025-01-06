import axios from "axios";
const Axios = axios.create({
  baseURL: "https://rappi-offers-scraping-backend.onrender.com/store/"
    // process.env.NODE_ENV == "production"
    //   ? `https://rappi-offers-scraping-backend.onrender.com/store/`
    //   : `http://localhost:4000/store/`,
});

export default Axios;
