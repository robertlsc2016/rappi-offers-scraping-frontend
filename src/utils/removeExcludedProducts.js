import getLocalStorage from "../services/LocalStorage/getLocalStorage";

const removeExcludedProducts = (products) => {
  const excludedProducts =
    getLocalStorage({
      name: `excluded-products`,
    }) || [];

  try {
    for (const key in products) {
      if (Array.isArray(products[key])) {
        products[key] = products[key].filter((product) => {
          const excludedProduct = excludedProducts.find(
            (p) => p.product_id === product.product_id
          );

          if (excludedProduct) {
            return false;
          }

          return true;
        });
      }
    }

    return products;
  } catch (error) {
    throw new Error(
      "erro ao remover produtos excluidos pelo usuario do retorno da api"
    );
  }
};

export default removeExcludedProducts;
