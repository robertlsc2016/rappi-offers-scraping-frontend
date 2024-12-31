import Axios from "./axiosInstance";

const getInfosStore = async ({ id_store }) => {
  const infosStore = await Axios.get(
    `https://services.rappi.com.br/api/web-gateway/web/stores-router/id/${id_store}/`
  );

  return infosStore.data;
};

export default getInfosStore;
