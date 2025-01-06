import AccordionProducts from "./AccordionProducts";

const ContainerAccordionProducts = ({
  products,
  new_products,
  id_store,
  parent_store_type,
  store_type,
}) => {
  return (
    <div
      style={{
        height: "auto",
      }}
    >
      <AccordionProducts
        parent_store_type={parent_store_type}
        store_type={store_type}
        id_store={id_store}
        products={new_products.filter(
          (new_product) => new_product.discount > 0
        )}
        initial_rannge={100}
        final_range={0}
        backgroundColor="#f9f6db"
        IsNewItems={true}
        description="Novo Produtos"
      />

      <AccordionProducts
        id_store={id_store}
        products={products}
        initial_rannge={100}
        final_range={80}
      />

      <AccordionProducts
        id_store={id_store}
        products={products}
        initial_rannge={80}
        final_range={60}
      />

      <AccordionProducts
        id_store={id_store}
        products={products}
        initial_rannge={60}
        final_range={40}
      />

      <AccordionProducts
        id_store={id_store}
        products={products}
        initial_rannge={40}
        final_range={10}
      />

      <AccordionProducts
        id_store={id_store}
        products={products}
        initial_rannge={9.9}
        final_range={0}
      />

      <AccordionProducts
        id_store={id_store}
        expanded={true}
        backgroundColor="#f9f6db"
        products={products}
        initial_rannge={100}
        final_range={0}
        description="Todos os Produtos"
      />
    </div>
  );
};

export default ContainerAccordionProducts;
