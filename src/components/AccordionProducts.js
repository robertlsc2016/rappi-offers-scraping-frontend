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
import saveLocalStorage from "../services/LocalStorage/saveLocalStorage";

const AccordionProducts = ({
  store_id,
  products: initialProducts = [],
  initial_rannge,
  final_range,
  backgroundColor = "#e9e9e9",
  description,
  expanded = false,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  useEffect(() => {
    setFilteredProducts(initialProducts);
  }, [initialProducts]);

  const handleRemoveProduct = (id) => {
    const selectProductNotInteressed = filteredProducts.filter(
      (product) => product.id == id
    )[0];

    const prevItens =
      JSON.parse(localStorage.getItem(`products-not-interessed-${store_id}`)) ||
      [];

    if (
      prevItens.some(
        (item) =>
          item.id == id && item.price == selectProductNotInteressed.price
      )
    ) {
      setFilteredProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
      return;
    }

    const filterNotInteressedItens = prevItens.filter((item) => item.id !== id);

    saveLocalStorage({
      name: `products-not-interessed-${store_id}`,
      data: [
        ...filterNotInteressedItens,
        {
          id: selectProductNotInteressed.id,
          price: selectProductNotInteressed.price,
          product_name: selectProductNotInteressed.name,
        },
      ],
    });

    setFilteredProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <Accordion
      defaultExpanded={expanded}
      style={{
        display: filteredProducts.length === 0 ? "none" : "block",
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
          <p>[{filteredProducts.length} itens]</p>
        </div>
      </AccordionSummary>
      <S_AccordionDetails>
        {filteredProducts.length > 0 &&
          filteredProducts.map(
            ({
              id,
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
                id={id}
                unit_type={unit_type}
                quantity={quantity}
                name={name}
                price={price}
                discount={discount}
                image_url={image_url}
                real_price={real_price}
                removeProduct={handleRemoveProduct}
                stock={stock}
                pum={pum}
                navigation={navigation}
              />
            )
          )}
      </S_AccordionDetails>
    </Accordion>
  );
};

export default AccordionProducts;
