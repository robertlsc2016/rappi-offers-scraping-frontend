import Axios from "./axiosInstance";

const globalSearchProduct = async ({ query }) => {
  const getGlobalProducts = await Axios.post("/globalSearchProducts", {
    query: query,
  });

  const { data } = getGlobalProducts;
  return data;
};

export default globalSearchProduct;
