import Axios from "./axiosInstance";

const globalSearchProduct = async ({ query }) => {
  const getGlobalProducts = await Axios.post("/getInfoStore", {
    query: query,
  });

  const { data } = getGlobalProducts;
  return data;
};

export default globalSearchProduct;
