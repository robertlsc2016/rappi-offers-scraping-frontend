import { Box, Button, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import getProductsTurbo from "../services/getProductsTurbo";

const LayoutMarkets = ({ name, id_store }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const productsData = await getProductsTurbo(id_store);
    const sortedProducts = productsData.sort((a, b) => b.discount - a.discount);
    setProducts(sortedProducts);
    setLoading(false);
  };

  return (
    <>
      <h1>{name}</h1>
      <Link to="/">
        <Button variant="contained">Voltar</Button>
      </Link>
      <div
        className="body-market"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          marginTop: "16px",
          gap: "10px",
          // border: "1px solid black",
          height: "auto",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {loading ? (
          <>
            {Array(50)
              .fill(null)
              .map((_, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "5px",
                    width: "150px",
                  }}
                >
                  <Skeleton
                    key={index}
                    variant="rectangular"
                    width="100%"
                    height={100}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      gap: "5px",
                      width: "100%",
                    }}
                  >
                    <Skeleton
                      key={index}
                      variant="rectangular"
                      width={100}
                      height={25}
                    />
                    <Skeleton
                      key={index}
                      variant="rectangular"
                      width={100}
                      height={25}
                    />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Skeleton width="60%" height={10}>
                      <Typography>.</Typography>
                    </Skeleton>
                    <Skeleton width="60%" height={10}>
                      <Typography>.</Typography>
                    </Skeleton>
                  </Box>
                </Box>
              ))}
          </>
        ) : (
          products.map(({ name, price, discount, real_price, image_url }) => (
            <CardProduct
              name={name}
              price={price}
              discount={`${(discount * 100).toFixed(2)}%`}
              image={image_url}
            />
          ))
        )}
      </div>
    </>
  );
};

export default LayoutMarkets;
