import getLocalStorage from "../services/LocalStorage/getLocalStorage";

const removeProductsNotInteressed = async (products, id_store) => {
  const notInteresseProducts =
    (await getLocalStorage({
      name: `products-not-interessed-${id_store}`,
    })) || [];

  console.log(notInteresseProducts);

  // Filtrar os produtos
  for (const key in products) {
    if (Array.isArray(products[key])) {
      products[key] = products[key].filter((produto) => {
        // Encontra o produto correspondente pelo ID
        const produtoNotInteresse = notInteresseProducts.find(
          (p) => p.id === produto.id
        )

        // Verifica se o produto está na lista de não interesse e se o preço é menor
        if (produtoNotInteresse) {
          console.log(produto)
          if (
            parseFloat(produto.price) >= parseFloat(produtoNotInteresse.price)
          ) {
            return false;
          }

          if (
            parseFloat(produto.price) < parseFloat(produtoNotInteresse.price)
          ) {
            return true;
          }
        }

        // Se o produto não está na lista de não interesse, mantém ele
        return true;
      });
    }
  }

  return products;
};
export default removeProductsNotInteressed;
