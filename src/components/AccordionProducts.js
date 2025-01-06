import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardProduct from "./CardProduct";
import { S_AccordionDetails } from "../styles/AccordionDetails.style";
import axios from "axios";
import Axios from "../services/axiosInstance";

const AccordionProducts = ({
  id_store,
  products,
  initial_rannge,
  final_range,
  backgroundColor = "#e9e9e9",
  description,
  expanded = false,
  IsNewItems = false,
  store_type,
  parent_store_type,
}) => {
  const filteredProducts = products.filter((product) => {
    const discountPercentage = product.discount * 100;

    return (
      discountPercentage >= final_range && discountPercentage <= initial_rannge
    );
  });

  return (
    <Accordion
      defaultExpanded={expanded}
      style={{
        display: filteredProducts.length === 0 ? "none" : "block",
      }}
      sx={{ width: "100%" }}
      slotProps={{ transition: { timeout: 50 } }}
    >
      <AccordionSummary
        sx={{ backgroundColor: backgroundColor, width: "100%", height: "100%" }}
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
      <S_AccordionDetails>
        {filteredProducts.map(
          ({
            id,
            name,
            price,
            discount,
            real_price,
            image_url,
            unit_type,
            quantity,
          }) => (
            <CardProduct
              key={id}
              id={id}
              unit_type={unit_type}
              quantity={quantity}
              name={name}
              price={price}
              discount={discount}
              image={image_url}
              real_price={real_price}
            />
          )
        )}
      </S_AccordionDetails>
    </Accordion>
  );
};

export default AccordionProducts;
