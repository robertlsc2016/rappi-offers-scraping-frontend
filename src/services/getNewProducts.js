import removeProductsNotInteressed from "../utils/removeProductsNotInteressed";
import Axios from "./axiosInstance";
import getLocalStorage from "./LocalStorage/getLocalStorage";
import saveLocalStorage from "./LocalStorage/saveLocalStorage";
import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";
import searchLocalStorage from "./LocalStorage/searchLocalStorage";

const getNewProductsStore = async ({
  id_store,
  store_type,
  parent_store_type,
}) => {
  const configs = {
    state: {
      parent_store_type: store_type,
      store_type: parent_store_type,
    },
    stores: [id_store],
  };

  try {
    const localStorage = await searchLocalStorage({
      name: `getNewProductsStore-${id_store}`,
    });

    if (localStorage) {
      const _removeNotInteressedProducts = await removeProductsNotInteressed(
        localStorage,
        id_store
      );

      return _removeNotInteressedProducts;
    }

    const newProducts = await Axios.post("/getNewProductsStore", configs).then(
      ({ data }) => {
        return data;
      }
    );

    const reorderProductsDiscount = {
      id_store: newProducts.id_store,
      products: newProducts.products
        .filter((product) => product.discount > 0.25)
        .sort((a, b) => b.discount - a.discount),
    };

    const _removeNotInteressedProducts = await removeProductsNotInteressed(
      reorderProductsDiscount,
      id_store
    );

    saveLocalStorage({
      name: `getNewProductsStore-${id_store}`,
      data: _removeNotInteressedProducts,
    });

    saveLocalStorageTime({ name: `getNewProductsStore-${id_store}` });

    return _removeNotInteressedProducts;
  } catch (err) {
    return err;
  }
};

export default getNewProductsStore;
