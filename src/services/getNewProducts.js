import Axios from "./axiosInstance";

const getNewProductsStore = async ({
  id_store,
  store_type,
  parent_store_type,
}) => {
  const { data } = await Axios.post("/getNewProductsStore", {
    state: {
      parent_store_type: store_type,
      store_type: parent_store_type,
    },
    stores: [id_store],
  });

  return data;
};

export default getNewProductsStore;
