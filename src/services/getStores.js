import Axios from "./axiosInstance";
import getLocalStorage from "./LocalStorage/getLocalStorage";
import saveLocalStorage from "./LocalStorage/saveLocalStorage";
import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";

const getStores = async () => {
  try {
    const data = await getLocalStorage({ name: "getStores" });
    if (data) return JSON.parse(data);

    const stores = await Axios.get("/getStores").then(({ data }) => {
      return data;
    });

    saveLocalStorage({ name: "getStores", data: stores });
    saveLocalStorageTime({ name: `getStores` });

    return stores;
  } catch (err) {
    return err;
  }
};

export default getStores;
