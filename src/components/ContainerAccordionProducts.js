import AccordionProducts from "./AccordionProducts";

const ContainerAccordionProducts = ({ products, id_store }) => {
  return (
    <div
      style={{
        height: "auto",
      }}
    >
      <AccordionProducts
        id_store={id_store}
        products={products}
        initial_rannge={100}
        final_range={0}
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
