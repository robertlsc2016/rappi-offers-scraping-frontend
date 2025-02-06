import removeExcludedProducts from "../utils/removeExcludedProducts";
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
    const localStorage = searchLocalStorage({
      name: `getProducts-${store_id}`,
    });

    if (localStorage) {
      const _removeExcludedProducts = removeExcludedProducts(localStorage);

      const _removeNotInteressedProducts = removeProductsNotInteressed(
        _removeExcludedProducts
      );

      return _removeNotInteressedProducts;
    }

    const { data: productsOffers } = await Axios.post(
      "/products_offer",
      configs
    );

    const _removeExcludedProducts = removeExcludedProducts(productsOffers);

    const _removeNotInteressedProducts = removeProductsNotInteressed(
      _removeExcludedProducts
    );

    saveLocalStorage({ name: `getProducts-${store_id}`, data: productsOffers });
    saveLocalStorageTime({ name: `getProducts-${store_id}` });

    return _removeNotInteressedProducts;
  } catch (error) {
    throw new Error("falha ao coletar produtos da api");
  }
};

export default getProducts;
