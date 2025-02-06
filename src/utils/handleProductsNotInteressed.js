import saveLocalStorage from "../services/LocalStorage/saveLocalStorage";

const handleRemoveProduct = (filteredProducts, setFilteredProducts, product_id) => {
  const selectProductNotInteressed = filteredProducts.find(
    (product) => product.product_id === product_id
  );

  const prevItens =
    JSON.parse(localStorage.getItem(`products-not-interessed`)) || [];

  if (
    prevItens.some(
      (item) =>
        item.product_id === product_id && item.price === selectProductNotInteressed.price
    )
  ) {
    setFilteredProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== product_id)
    );
    return;
  }

  const filterNotInteressedItens = prevItens.filter(
    (item) => item.product_id !== product_id
  );

  saveLocalStorage({
    name: `products-not-interessed`,
    data: [
      ...filterNotInteressedItens,
      {
        product_id: selectProductNotInteressed.product_id,
        price: selectProductNotInteressed.price,
        product_name: selectProductNotInteressed.name,
      },
    ],
  });

  setFilteredProducts((prevProducts) =>
    prevProducts.filter((product) => product.product_id !== product_id)
  );
};

export default handleRemoveProduct;
