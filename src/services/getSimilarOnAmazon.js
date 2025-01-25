import Axios from "./axiosInstance";

const getSimilarOnAmazon = async ({ query }) => {
  try {
    const { data: products_amazon } = await Axios.post("/getSimilarOnAmazon", {
      product_name: query,
    });

    console.log(products_amazon);
    return products_amazon;
  } catch (err) {
    return err;
  }
};

export default getSimilarOnAmazon;
