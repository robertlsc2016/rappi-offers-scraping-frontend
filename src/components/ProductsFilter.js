const ProductsFilter = ({ products, textFilter }) => {
  if (textFilter == "") return [];
  if (!products) return [];

  const productsFilter = products.filter((item) =>
    item.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(
        textFilter
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )
  );

  return productsFilter;
};

export default ProductsFilter;
