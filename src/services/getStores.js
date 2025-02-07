import Axios from "./axiosInstance";
import getLocalStorage from "./LocalStorage/getLocalStorage";
import saveLocalStorage from "./LocalStorage/saveLocalStorage";
import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";
import searchLocalStorage from "./LocalStorage/searchLocalStorage";

const getStores = async () => {
  try {
    const { geolocation: location } = searchLocalStorage({
      name: "location",
    });

    const data = await getLocalStorage({ name: "getStores" });
    if (data) return data;
    
    const stores = await Axios.post("/getStoresByLocation", {
      lat: location.lat.toString(),
      lng: location.lng.toString(),
    }).then(({ data }) => {
      return data;
    });

    if (stores.status == 204) {
      throw new Error("não existem lojas disponiveis nessa localidade");
    }

    saveLocalStorage({ name: "getStores", data: stores });
    saveLocalStorageTime({ name: `getStores` });

    return stores;
  } catch (err) {
    throw new Error(err);
  }
};

export default getStores;
