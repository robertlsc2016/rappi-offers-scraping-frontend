import Axios from "./axiosInstance";
import saveLocalStorage from "./LocalStorage/saveLocalStorage";
import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";
import searchLocalStorage from "./LocalStorage/searchLocalStorage";

const getProducts = async ({ id_store, parent_store_type, store_type }) => {
  const configs = {
    state: {
      parent_store_type,
      store_type,
    },
    stores: [id_store],
  };

  try {
    const localStorage = await searchLocalStorage({
      name: `getProducts-${id_store}`,
    });
    if (localStorage) return localStorage;

    const productsOffers = await Axios.post(
      "/getAllStoreProductOffers",
      configs
    ).then(({ data }) => {
      return data;
    });

    saveLocalStorage({ name: `getProducts-${id_store}`, data: productsOffers });
    saveLocalStorageTime({ name: `getProducts-${id_store}` });

    return productsOffers;
  } catch (error) {
    return null;
  }
};

export default getProducts;
