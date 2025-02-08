import AccordionProducts from "./AccordionProducts";

const ContainerAccordionProducts = ({ products = [], store_id }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        gap: '8px',
        // alignItems: 'center',

        height: "auto",
        width: "100%",
        marginBottom: "140px",
        // background: 'red'
      }}
    >
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
        backgroundColor="rgba(2, 137, 209, 0.25)"
        description="Todos os Produtos"
      />
    </div>
  );
};

export default ContainerAccordionProducts;
