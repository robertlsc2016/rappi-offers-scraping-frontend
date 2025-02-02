import Axios from "./axiosInstance";

const globalSearchProduct = async ({ query, lat, lng }) => {
  const { data: getGlobalProducts } = await Axios.post(
    "/globalSearchProducts",
    {
      query: query,
      lat: lat,
      lng: lng,
    }
  );

  return getGlobalProducts;
};

export default globalSearchProduct;
