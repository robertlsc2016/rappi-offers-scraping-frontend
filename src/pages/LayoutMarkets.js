import { Box, Chip, IconButton, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import getProducts from "../services/getProducts";
import AccordionProducts from "../components/AccordionProducts";
import getInfosStore from "../services/getInfosStore";
const moment = require("moment");

const LayoutMarkets = ({ id_store, parent_store_type, store_type, name }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [infosStore, setInfoStore] = useState({});

  console.log({ id_store, parent_store_type, store_type, name });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    get_infosStore();
    get_products();
  }, []);

  const get_infosStore = async () => {
    const infos = await getInfosStore({ id_store: id_store });
    setInfoStore(infos);
  };

  const get_products = async () => {
    const productsData = await getProducts({
      id_store,
      parent_store_type,
      store_type,
      name,
    });
    const sortedProducts = productsData.sort((a, b) => b.discount - a.discount);
    setProducts(sortedProducts);
    // setMaxOffer(sortedProducts[0].discount);
    setLoading(false);
  };

  return (
    <>
      <div
        className="header"
        style={{
          // position: "fixed",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "16px",
          padding: "12px",
          width: "100%",
          height: "auto",
          backgroundColor: "#e9e9e9",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ height: "100%" }}>
          <Link to="/">
            <IconButton>
              <WestIcon />
            </IconButton>
          </Link>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            gap: "5px",
            flexDirection: "column",
          }}
        >
          <h1 style={{ margin: 0, padding: 0 }}>{name}</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
          >
            <Chip label="aberto" color="success" size="small" />
            <Chip label={`ID: ${id_store}`} color="info" size="small" />
            <Chip label={infosStore.address} color="info" size="small" />

            <Chip
              label={`últ. atual.: ${moment(
                infosStore.store_type?.updated_at
              ).format("DD/MM/YYYY HH:mm:ss")}`}
              color="info"
              size="small"
            />
          </div>
          <Box>
            <Chip
              label={` ${products.length} itens`}
              color="info"
              size="small"
            />
          </Box>
        </Box>
      </div>

      <div
        className="body-market"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: "row",
          marginTop: "16px",
          gap: "10px",
          borderRadius: "10px",

          backgroundColor: "",

          // border: "1px solid black",
          height: "auto",
          flexWrap: "wrap",
          width: "100%",
          padding: "24px",
        }}
      >
        {loading ? (
          <>
            {Array(50)
              .fill(null)
              .map((_, index) => (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={100}
                  key={index}
                />
              ))}
          </>
        ) : (
          <>
            <AccordionProducts
              products={products}
              initial_rannge={100}
              final_range={80}
            />

            <AccordionProducts
              products={products}
              initial_rannge={80}
              final_range={60}
            />

            <AccordionProducts
              products={products}
              initial_rannge={60}
              final_range={40}
            />

            <AccordionProducts
              products={products}
              initial_rannge={40}
              final_range={10}
            />

            <AccordionProducts
              products={products}
              initial_rannge={9.9}
              final_range={0}
            />

            <AccordionProducts
              expanded={true}
              backgroundColor="#f9f6db"
              products={products}
              initial_rannge={100}
              final_range={0}
              description="Todos os Produtos"
            />
          </>
        )}
      </div>
    </>
  );
};

export default LayoutMarkets;
