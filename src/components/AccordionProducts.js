import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardProduct from "./CardProduct";

const AccordionProducts = ({
  products,
  initial_rannge,
  final_range,
  backgroundColor = "#e9e9e9",
  description,
  expanded = false,
}) => {
  const filteredProducts = products.filter(
    (product) =>
      product.discount * 100 <= initial_rannge &&
      product.discount * 100 >= final_range
  );

  return (
    <Accordion
      defaultExpanded={expanded}
      style={{
        display: filteredProducts.length == 0 ? "none" : "block",
      }}
      sx={{ width: "100%" }}
      slotProps={{ transition: { timeout: 50 } }}
    >
      <AccordionSummary
        sx={{ backgroundColor: backgroundColor }}
        expandIcon={<ExpandMoreIcon fontSize="large" />}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Typography component="span">
            <h3>
              {description
                ? description
                : `ofertas ${initial_rannge}% - ${final_range}% `}
            </h3>
          </Typography>
          <p>[{filteredProducts.length} itens]</p>
        </div>
      </AccordionSummary>
      <AccordionDetails
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filteredProducts.map(
          ({ id, name, price, discount, real_price, image_url }) => (
            <CardProduct
              key={id}
              name={name}
              price={price}
              discount={`${(discount * 100).toFixed(2)}%`}
              image={image_url}
              real_price={real_price}
            />
          )
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionProducts;
