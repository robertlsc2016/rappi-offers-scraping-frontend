import Axios from "./axiosInstance";

const getSimilarOnAmazon = async ({ query }) => {
  try {
    const { data } = await Axios.post("/getSimilarOnAmazon", {
      product_name: query,
    });

    return data;
  } catch (err) {
    return [];
  }
};

export default getSimilarOnAmazon;
