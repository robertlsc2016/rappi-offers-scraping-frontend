import Axios from "./axiosInstance";
import getLocalStorage from "./LocalStorage/getLocalStorage";
import saveLocalStorage from "./LocalStorage/saveLocalStorage";
import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";

const getStores = async () => {
  try {
    const data = await getLocalStorage({ name: "getStores" });
    if (data) return data;

    const stores = await Axios.post("/getStoresByLocation", {
      lat: "-23.57162",
      lng: "-46.73031",
    }).then(({ data }) => {
      return data;
    });

    saveLocalStorage({ name: "getStores", data: stores });
    saveLocalStorageTime({ name: `getStores` });

    return stores;
  } catch (err) {
    throw new Error(err);
  }
};

export default getStores;
