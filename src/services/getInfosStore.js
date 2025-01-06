import Axios from "./axiosInstance";

const getInfosStore = async ({ id_store }) => {
  const infosStore = await Axios.post("/getInfoStore", {
    id_store: id_store,
  });

  const { data } = infosStore;
  return data;
};

export default getInfosStore;
