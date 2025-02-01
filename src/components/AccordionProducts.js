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

  const handleRemoveProduct = async (product_id) => {
    const selectProductNotInteressed = filteredProducts.filter(
      (product) => product.product_id == product_id
    )[0];

    const prevItens =
      JSON.parse(localStorage.getItem(`products-not-interessed`)) || [];

    if (
      prevItens.some(
        (item) =>
          item.product_id == product_id &&
          item.price == selectProductNotInteressed.price
      )
    ) {
      setFilteredProducts((prevProducts) =>
        prevProducts.filter((product) => product.product_id !== product_id)
      );
      // return;
    }

    const filterNotInteressedItens = prevItens.filter(
      (item) => item.product_id !== product_id
    );

    saveLocalStorage({
      name: `products-not-interessed`,
      data: [
        ...filterNotInteressedItens,
        {
          product_id: selectProductNotInteressed.product_id,
          price: selectProductNotInteressed.price,
          product_name: selectProductNotInteressed.name,
        },
      ],
    });

    setFilteredProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== product_id)
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
        sx={{
          backgroundColor: backgroundColor,
          width: "100%",
          height: "100%",
          padding: "0px 32px",
          // border: "1px solid black",
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
