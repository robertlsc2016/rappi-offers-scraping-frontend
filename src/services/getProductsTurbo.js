import Axios from "./axiosInstance";

const getProductsTurbo = async (id_store) => {
  const base_url =
    "https://services.rappi.com.br/api/web-gateway/web/dynamic/context/content/";

  const configs = {
    limit: 100,
    offset: 0,
    state: {
      lat: "",
      lng: "",
      //   aisle_id: "1926",
      //   parent_id: "1926",
      parent_store_type: "market",
      //   parent_store_type: "avocado_home",
      //   store_type: "turbo",
    },
    stores: [id_store],
    context: "aisles_tree",
  };

  const contexts = ["sub_aisles", "store_home"];

  const results = await Promise.all(
    contexts.map((context) =>
      Axios.post(base_url, {
        ...configs,
        context,
      })
    )
  );

  const [list1, list2] = results;

  const filteredProductsList1 = await filterProducts(
    list1.data.data.components,
    0
  );
  const filteredProductsList2 = await filterProducts(
    list2.data.data.components,
    3
  );

  const allProducts = [...filteredProductsList1, ...filteredProductsList2];

  console.log(allProducts);

  return allProducts;
};

const filterProducts = async (data, initial_index) => {
  let productsFiltered = [];

  for (let components = 0; components < data.length; components++) {
    if (data[components].index >= initial_index) {
      for (
        let products = 0;
        products < data[components].resource.products.length;
        products++
      ) {
        productsFiltered.push({
          name: data[components].resource.products[products].name,
          price: data[components].resource.products[products].price,
          discount: data[components].resource.products[products].discount,
          real_price: data[components].resource.products[products].real_price,
          image_url: data[components].resource.products[products].image_url,
        });
      }
    }
  }
  return productsFiltered;
};

export default getProductsTurbo;
