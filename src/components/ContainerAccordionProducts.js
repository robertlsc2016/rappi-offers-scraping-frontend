import AccordionProducts from "./AccordionProducts";

const ContainerAccordionProducts = ({
  products = [],
  new_products = [],
  store_id,
  parent_store_type,
  store_type,
}) => {


  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        marginBottom: "85px",
      }}
    >
      {new_products.length > 0 && (
        <AccordionProducts
          store_id={store_id}
          products={new_products}
          initial_rannge={100}
          final_range={0}
          IsNewItems={true}
          // parent_store_type={parent_store_type}
          // store_type={store_type}
          backgroundColor="#f9f6db"
          description="Novo Produtos"
        />
      )}

      <AccordionProducts
        store_id={store_id}
        products={products[80]}
        initial_rannge={100}
        final_range={80}
      />

      <AccordionProducts
        store_id={store_id}
        products={products[60]}
        initial_rannge={80}
        final_range={60}
      />

      <AccordionProducts
        store_id={store_id}
        products={products[40]}
        initial_rannge={60}
        final_range={40}
      />

      <AccordionProducts
        store_id={store_id}
        products={products[10]}
        initial_rannge={40}
        final_range={10}
      />

      <AccordionProducts
        store_id={store_id}
        products={products[0]}
        initial_rannge={9.9}
        final_range={0}
      />

      <AccordionProducts
        store_id={store_id}
        products={products.all}
        initial_rannge={100}
        final_range={0}
        expanded={true}
        backgroundColor="#f9f6db"
        description="Todos os Produtos"
      />
    </div>
  );
};

export default ContainerAccordionProducts;
