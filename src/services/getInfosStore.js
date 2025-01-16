import Axios from "./axiosInstance";
import saveLocalStorage from "./LocalStorage/saveLocalStorage";
import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";
import searchLocalStorage from "./LocalStorage/searchLocalStorage";

const getInfosStore = async ({ id_store }) => {
  try {
    const localStorage = await searchLocalStorage({
      name: `getInfoStore-${id_store}`,
    });

    if (localStorage) localStorage;

    const infosStore = await Axios.post("/getInfoStore", {
      id_store: id_store,
    }).then((data) => {
      return data;
    });

    saveLocalStorage({ name: `getInfoStore-${id_store}`, data: infosStore });
    saveLocalStorageTime({ name: `getInfoStore-${id_store}` });
    return infosStore;
  } catch (err) {
    return err;
  }
};

export default getInfosStore;
