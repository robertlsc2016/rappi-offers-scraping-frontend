import Axios from "./axiosInstance";

const globalSearchProduct = async ({ query, lat, lng }) => {
  const getGlobalProducts = await Axios.post("/globalSearchProducts", {
    query: query,
    lat: lat,
    lng: lng,
  });

  const { data } = getGlobalProducts;
  return data;
};

export default globalSearchProduct;
