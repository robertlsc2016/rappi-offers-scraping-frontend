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

  const reorderProductsDiscount = {
    id_store: data.id_store,
    products: data.products
      .filter((product) => product.discount > 0.25)
      .sort((a, b) => b.discount - a.discount),
  };

  return reorderProductsDiscount;
};

export default getNewProductsStore;
