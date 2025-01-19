import getLocalStorage from "../services/LocalStorage/getLocalStorage";

const removeProductsNotInteressed = async (products, id_store) => {
  const notInteresseProducts =
    (await getLocalStorage({
      name: `products-not-interessed-${id_store}`,
    })) || [];

  for (const key in products) {
    if (Array.isArray(products[key])) {
      products[key] = products[key].filter((product) => {
        const productNotInteressed = notInteresseProducts.find(
          (p) => p.id === product.id
        );

        if (productNotInteressed) {
          if (
            parseFloat(product.price) >= parseFloat(productNotInteressed.price)
          )
            return false;

          if (
            parseFloat(product.price) < parseFloat(productNotInteressed.price)
          )
            return true;
        }

        return true;
      });
    }
  }

  console.log(products)

  return products;
};
export default removeProductsNotInteressed;
