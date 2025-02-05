import removeProductsNotInteressed from "../utils/removeProductsNotInteressed";
import Axios from "./axiosInstance";
import saveLocalStorage from "./LocalStorage/saveLocalStorage";
import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";
import searchLocalStorage from "./LocalStorage/searchLocalStorage";

const getProducts = async ({ store_id, parent_store_type, store_type }) => {
  const configs = {
    store_id: store_id,
    parent_store_type: parent_store_type,
    store_type: store_type,
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

    const { data: productsOffers } = await Axios.post(
      "/products_offer",
      configs
    );

    const _removeNotInteressedProducts = await removeProductsNotInteressed(
      productsOffers,
      store_id
    );

    saveLocalStorage({ name: `getProducts-${store_id}`, data: productsOffers });
    saveLocalStorageTime({ name: `getProducts-${store_id}` });

    return _removeNotInteressedProducts;
  } catch (error) {
    return error;
  }
};

export default getProducts;
