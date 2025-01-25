import removeProductsNotInteressed from "../utils/removeProductsNotInteressed";
import Axios from "./axiosInstance";
import saveLocalStorage from "./LocalStorage/saveLocalStorage";
import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";
import searchLocalStorage from "./LocalStorage/searchLocalStorage";

const getProducts = async ({ store_id, parent_store_type, store_type }) => {

  const configs = {
    state: {
      parent_store_type,
      store_type,
    },
    stores: [Number(store_id)],
  };

  try {
    const localStorage = await searchLocalStorage({
      name: `getProducts-${store_id}`,
    });

    if (localStorage) {
      const _removeNotInteressedProducts = await removeProductsNotInteressed(
        localStorage,
        store_id
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
      store_id
    );

    saveLocalStorage({ name: `getProducts-${store_id}`, data: productsOffers });
    saveLocalStorageTime({ name: `getProducts-${store_id}` });

    return _removeNotInteressedProducts;
  } catch (error) {
    return null;
  }
};

export default getProducts;
