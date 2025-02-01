// import removeProductsNotInteressed from "../utils/removeProductsNotInteressed";
// import Axios from "./axiosInstance";
// // import getLocalStorage from "./LocalStorage/getLocalStorage";
// import saveLocalStorage from "./LocalStorage/saveLocalStorage";
// import saveLocalStorageTime from "./LocalStorage/saveLocalStorageTime";
// import searchLocalStorage from "./LocalStorage/searchLocalStorage";

// const getNewProductsStore = async ({
//   store_id,
//   store_type,
//   parent_store_type,
// }) => {
//   const configs = {
//     state: {
//       parent_store_type: parent_store_type,
//       store_type: store_type,
//     },
//     stores: [Number(store_id)],
//   };

//   try {
//     const localStorage = await searchLocalStorage({
//       name: `getNewProductsStore-${store_id}`,
//     });

//     if (localStorage) {
//       const _removeNotInteressedProducts = await removeProductsNotInteressed(
//         localStorage,
//         store_id
//       );

//       return _removeNotInteressedProducts;
//     }

//     const newProducts = await Axios.post("/getNewProductsStore", configs).then(
//       ({ data }) => {
//         return data;
//       }
//     );

//     const reorderProductsDiscount = {
//       store_id: newProducts.store_id,
//       products: newProducts.products
//         .filter((product) => product.discount > 0.25)
//         .sort((a, b) => b.discount - a.discount),
//     };

//     const _removeNotInteressedProducts = await removeProductsNotInteressed(
//       newProducts,
//       store_id
//     );

//     saveLocalStorage({
//       name: `getNewProductsStore-${store_id}`,
//       data: _removeNotInteressedProducts,
//     });

//     saveLocalStorageTime({ name: `getNewProductsStore-${store_id}` });

//     return reorderProductsDiscount;
//   } catch (err) {
//     return err;
//   }
// };

// export default getNewProductsStore;
