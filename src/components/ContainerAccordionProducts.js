import AccordionProducts from "./AccordionProducts";

const ContainerAccordionProducts = ({
  products,
  new_products = [],
  id_store,
  parent_store_type,
  store_type,
}) => {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        // border: "1px solid black",
        marginBottom: "85px"
      }}
    >
      {new_products.length > 0 && (
        <AccordionProducts
          parent_store_type={parent_store_type}
          store_type={store_type}
          id_store={id_store}
          products={new_products}
          initial_rannge={100}
          final_range={0}
          backgroundColor="#f9f6db"
          IsNewItems={true}
          description="Novo Produtos"
        />
      )}

      <AccordionProducts
        id_store={id_store}
        products={products[80]}
        initial_rannge={100}
        final_range={80}
      />

      <AccordionProducts
        id_store={id_store}
        products={products[60]}
        initial_rannge={80}
        final_range={60}
      />

      <AccordionProducts
        id_store={id_store}
        products={products[40]}
        initial_rannge={60}
        final_range={40}
      />

      <AccordionProducts
        id_store={id_store}
        products={products[10]}
        initial_rannge={40}
        final_range={10}
      />

      <AccordionProducts
        id_store={id_store}
        products={products[0]}
        initial_rannge={9.9}
        final_range={0}
      />

      <AccordionProducts
        id_store={id_store}
        expanded={true}
        backgroundColor="#f9f6db"
        products={products.all}
        initial_rannge={100}
        final_range={0}
        description="Todos os Produtos"
      />
    </div>
  );
};

export default ContainerAccordionProducts;
