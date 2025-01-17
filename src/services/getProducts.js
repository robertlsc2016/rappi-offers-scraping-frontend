import removeProductsNotInteressed from "../utils/removeProductsNotInteressed";
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

    if (localStorage) {
      const _removeNotInteressedProducts = await removeProductsNotInteressed(
        localStorage,
        id_store
      );

      return _removeNotInteressedProducts;
    }

    const productsOffers = await Axios.post(
      "/getAllStoreProductOffers",
      configs
    ).then(({ data }) => {
      return data;
    });

    const _removeNotInteressedProducts = await removeProductsNotInteressed(
      productsOffers,
      id_store
    );

    saveLocalStorage({ name: `getProducts-${id_store}`, data: productsOffers });
    saveLocalStorageTime({ name: `getProducts-${id_store}` });

    return _removeNotInteressedProducts;
  } catch (error) {
    return null;
  }
};

export default getProducts;
