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
    if(localStorage) return localStorage

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

    saveLocalStorage({
      name: `getNewProductsStore-${id_store}`,
      data: reorderProductsDiscount,
    });

    saveLocalStorageTime({ name: `getNewProductsStore-${id_store}` });

    return reorderProductsDiscount;
  } catch (err) {
    return err;
  }
};

export default getNewProductsStore;
