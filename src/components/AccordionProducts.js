import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardProduct from "./CardProduct";
import { S_AccordionDetails } from "../styles/AccordionDetails.style";
import { useState, useEffect } from "react";

import handleRemoveProduct from "../utils/handleProductsNotInteressed";
import handleDeleteProduct from "../utils/handleExcludedProducts";
import { SAccordionProducts } from "../styles/AccordionProducts.styles";

const AccordionProducts = ({
  store_id,
  products: initialProducts = [],
  initial_rannge,
  final_range,
  backgroundColor = "rgba(231, 231, 231, 0.66)",
  description,
  expanded = false,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  useEffect(() => {
    setFilteredProducts(initialProducts);
  }, [initialProducts]);

  return (
    filteredProducts.length > 0 && (
      <SAccordionProducts
        sx={{
          boxShadow: 'none',
          bordeR: 'none',
          margin: '0px !important',
          padding: '0px !important'
        }}
        defaultExpanded={expanded}
        slotProps={{ transition: { timeout: 50 } }}
      >
        <AccordionSummary
          sx={{
            backgroundColor: backgroundColor,
            width: "100%",
            height: "100%",
            padding: "0px 32px",
            borderRadius: "16px",
          }}
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
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                {description
                  ? description
                  : `${initial_rannge}% - ${final_range}% `}
              </h3>
            </Typography>
            <p>[{filteredProducts.length} itens]</p>
          </div>
        </AccordionSummary>
        <S_AccordionDetails>
          {filteredProducts.length > 0 &&
            filteredProducts.map(
              ({
                id,
                product_id,
                name,
                price,
                discount,
                real_price,
                image_url,
                quantity,
                unit_type,
                stock,
                pum,
                navigation,
              }) => (
                <CardProduct
                  key={id}
                  product_id={product_id}
                  id={id}
                  unit_type={unit_type}
                  quantity={quantity}
                  name={name}
                  price={price}
                  discount={discount}
                  image_url={image_url}
                  real_price={real_price}
                  removeProduct={(product_id) =>
                    handleRemoveProduct(
                      filteredProducts,
                      setFilteredProducts,
                      product_id
                    )
                  }
                  deleteProduct={(product_id) =>
                    handleDeleteProduct(
                      filteredProducts,
                      setFilteredProducts,
                      product_id
                    )
                  }
                  stock={stock}
                  pum={pum}
                  navigation={navigation}
                />
              )
            )}
        </S_AccordionDetails>
      </SAccordionProducts>
    )
  );
};

export default AccordionProducts;
