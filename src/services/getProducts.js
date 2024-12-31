import Axios from "./axiosInstance";
const _ = require("lodash");

const getProducts = async ({
  id_store,
  parent_store_type,
  store_type,
  limit = 100,
}) => {
  const configs = {
    limit: limit,
    offset: 0,
    state: {
      aisle_id: "1926",
      parent_id: "1926",
      lat: "",
      lng: "",
      parent_store_type: parent_store_type,
      store_type: store_type,
    },
    stores: [id_store],
  };

  const base_url =
    "https://services.rappi.com.br/api/web-gateway/web/dynamic/context/content/";

  const contexts = [
    { context: "sub_aisles", limit: 100 },
    { context: "store_home", limit: 100 },
    { context: "sub_aisles", limit: 6 },
  ];

  const results = await Promise.all(
    contexts.map((context) =>
      Axios.post(base_url, {
        ...configs,
        context: context.context,
        limit: context.limit,
      })
    )
  );

  const [list1, list2, list3] = results;

  const filteredProductsList1 = await filterProducts(list1.data.data, 0);
  const filteredProductsList2 = await filterProducts(list2.data.data, 3);
  const filteredProductsList3 = await filterProducts(list3.data.data, 3);

  const allProducts = [
    ...filteredProductsList1,
    ...filteredProductsList2,
    ...filteredProductsList3,
  ];

  const allProductsCleann = _.uniqBy(allProducts, "id");

  return allProductsCleann;
};

const filterProducts = (data, initial_index) =>
  data.components
    .filter((component) => component.index >= initial_index)
    .flatMap((component) =>
      component.resource.products.map(
        ({ id, name, price, discount, real_price, image_url }) => ({
          id,
          name,
          price,
          discount,
          real_price,
          image_url,
        })
      )
    );

// const filterProducts = (data, initial_index) => {
//   let productsFiltered = [];

//   for (let compnts = 0; compnts <= data.components.length - 1; compnts++) {
//     if (data.components[compnts].index >= initial_index) {
//       for (
//         let prdcts = 0;
//         prdcts <= data.components[compnts].resource.products.length - 1;
//         prdcts++
//       ) {
//         productsFiltered.push({
//           id: data.components[compnts].resource.products[prdcts].id,
//           name: data.components[compnts].resource.products[prdcts].name,
//           price: data.components[compnts].resource.products[prdcts].price,
//           discount: data.components[compnts].resource.products[prdcts].discount,
//           real_price:
//             data.components[compnts].resource.products[prdcts].real_price,
//           image_url:
//             data.components[compnts].resource.products[prdcts].image_url,
//         });
//       }
//     }
//   }

//   return productsFiltered;
// };

export default getProducts;
