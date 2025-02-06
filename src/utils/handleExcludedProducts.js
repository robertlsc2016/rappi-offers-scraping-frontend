import saveLocalStorage from "../services/LocalStorage/saveLocalStorage";

const handleDeleteProduct = (
  filteredProducts,
  setFilteredProducts,
  product_id
) => {
  const selectProductDeleted = filteredProducts.find(
    (product) => product.product_id === product_id
  );

  const prevItens = JSON.parse(localStorage.getItem(`excluded-products`)) || [];

  if (
    prevItens.some(
      (item) =>
        item.product_id === product_id &&
        item.price === selectProductDeleted.price
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
    name: `excluded-products`,
    data: [
      ...filterNotInteressedItens,
      {
        product_id: selectProductDeleted.product_id,
        price: selectProductDeleted.price,
        product_name: selectProductDeleted.name,
      },
    ],
  });

  setFilteredProducts((prevProducts) =>
    prevProducts.filter((product) => product.product_id !== product_id)
  );
};

export default handleDeleteProduct;
