import Axios from "./axiosInstance";
import saveLocalStorage from "./LocalStorage/saveLocalStorage";
import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";
import searchLocalStorage from "./LocalStorage/searchLocalStorage";

const getInfosStore = async ({ store_id }) => {
  try {
    const localStorage = await searchLocalStorage({
      name: `getInfoStore-${store_id}`,
    });

    if (localStorage) return localStorage;

    const infosStore = await Axios.post("/getInfoStore", {
      store_id: Number(store_id),
    }).then((data) => {
      return data.data;
    });

    saveLocalStorage({ name: `getInfoStore-${store_id}`, data: infosStore });
    saveLocalStorageTime({ name: `getInfoStore-${store_id}` });
    return infosStore;
  } catch (err) {
    return err;
  }
};

export default getInfosStore;
