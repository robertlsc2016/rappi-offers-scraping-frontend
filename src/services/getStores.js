import Axios from "./axiosInstance";
import getLocalStorage from "./LocalStorage/getLocalStorage";
import saveLocalStorage from "./LocalStorage/saveLocalStorage";
import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";
import searchLocalStorage from "./LocalStorage/searchLocalStorage";

const getStores = async () => {
  try {
    const { geolocation } = JSON.parse(localStorage.getItem("location"));

    if (!geolocation) {
      throw new Error("sem localizacao em localstorage");
    }

    const _localStorage = searchLocalStorage({
      name: `getStores`,
    });

    if (_localStorage) {
      return _localStorage;
    }

    const {data: stores} = await Axios.post("/getStoresByLocation", {
      lat: geolocation.lat.toString(),
      lng: geolocation.lng.toString(),
    });

    if (stores.status == 204) {
      throw new Error("não existem lojas disponiveis nessa localidade");
    }

    saveLocalStorage({ name: "getStores", data: stores });
    saveLocalStorageTime({ name: `getStores` });

    return stores;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export default getStores;
