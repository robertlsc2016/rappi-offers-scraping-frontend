import getLocalStorage from "../services/LocalStorage/getLocalStorage";

const removeProductsNotInteressed = (products) => {
  const notInteresseProducts =
    getLocalStorage({
      name: `products-not-interessed`,
    }) || [];

  try {
    for (const key in products) {
      if (Array.isArray(products[key])) {
        products[key] = products[key].filter((product) => {
          const productNotInteressed = notInteresseProducts.find(
            (p) => p.product_id === product.product_id
          );

          if (productNotInteressed) {
            const priceDifference = product.price - productNotInteressed.price;
            if (priceDifference > -0.3) {
              return false;
            }
          }

          return true;
        });
      }
    }

    return products;
  } catch {
    throw new Error(
      "erro ao remover produtos aguardando redução pelo usuario do retorno da api"
    );
  }
};

export default removeProductsNotInteressed;
