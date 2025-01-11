import Axios from "./axiosInstance";

const getProducts = async ({
  id_store,
  parent_store_type,
  store_type,
}) => {
  const configs = {
    state: {
      parent_store_type: parent_store_type,
      store_type: store_type,
    },
    stores: [id_store],
  };

  const { data } = await Axios.post("/getAllStoreProductOffers", configs);
  return data;
};

export default getProducts;
