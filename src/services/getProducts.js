import Axios from "./axiosInstance";

const getProducts = async ({
  id_store,
  parent_store_type,
  store_type,
  limit = 100,
}) => {
  // const storedData = localStorage?.getItem(id_store);

  // if (storedData) {
  //   const parsedData = JSON.parse(storedData);
  //   const initialRegistration = parsedData.registration;

  //   if (
  //     initialRegistration &&
  //     new Date() - new Date(initialRegistration) <= 300000
  //   ) {
  //     return parsedData.allProducts;
  //   }
  // }

  const configs = {
    state: {
      parent_store_type: parent_store_type,
      store_type: store_type,
    },
    stores: [id_store],
  };

  const { data } = await Axios.post("/getAllStoreProductOffers", configs);


  // localStorage.setItem(
  //   id_store,
  //   JSON.stringify({
  //     registration: new Date(),
  //     allProducts: data,
  //   })
  // );

  console.log(data)
  return data
};



export default getProducts;
