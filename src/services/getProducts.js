import Axios from "./axiosInstance";

const getProducts = async ({ id_store, parent_store_type, store_type }) => {
  const configs = {
    state: {
      parent_store_type,
      store_type,
    },
    stores: [id_store],
  };

  try {
    const { data } = await Axios.post("/getAllStoreProductOffers", configs);
    return data;
  } catch (error) {
    return null; // Retorna `null` em caso de erro
  }
};

export default getProducts;
