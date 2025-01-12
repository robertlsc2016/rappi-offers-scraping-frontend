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
  products,
  initial_rannge,
  final_range,
  backgroundColor = "#e9e9e9",
  description,
  expanded = false,
}) => {
  return (
    <Accordion
      defaultExpanded={expanded}
      style={{
        display: products.length === 0 ? "none" : "block",
      }}
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
          <p>[{products.length} itens]</p>
        </div>
      </AccordionSummary>
      <S_AccordionDetails>
        {products.length > 0 &&
          products.map(
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
