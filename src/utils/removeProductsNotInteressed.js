import getLocalStorage from "../services/LocalStorage/getLocalStorage";

const removeProductsNotInteressed = async (products) => {
  const notInteresseProducts =
    (await getLocalStorage({
      name: `products-not-interessed`,
    })) || [];

  for (const key in products) {
    if (Array.isArray(products[key])) {
      products[key] = products[key].filter((product) => {
        const productNotInteressed = notInteresseProducts.find(
          (p) => p.product_id === product.product_id
        );

        if (productNotInteressed) {
          if (
            parseFloat(product.price) >= parseFloat(productNotInteressed.price)
          )
            return false;

          // SE O VALOR DO PRODUTO QUE ESTA EM LOCALSTORAGE É MAIOR QUE O QUE ESTÁ SENDO RECEBIDO ==> EXEBIR PRODUTO
          if (
            parseFloat(productNotInteressed.price) > parseFloat(product.price)
          )
            return true;
        }

        return true;
      });
    }
  }

  return products;
};
export default removeProductsNotInteressed;
