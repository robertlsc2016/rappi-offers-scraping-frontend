import { Box, Chip, IconButton, Skeleton } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import getProducts from "../services/getProducts";
import AccordionProducts from "../components/AccordionProducts";
import getInfosStore from "../services/getInfosStore";
import SearchBar from "../components/SearchBar";
import CardProduct from "../components/CardProduct";
const moment = require("moment");

const LayoutMarkets = ({ id_store, parent_store_type, store_type, name }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [infosStore, setInfoStore] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  const [textFilter, setTextFilter] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    get_infosStore();
    get_products();
  }, []);

  const inputValue = (text) => {
    console.log(text);
    filterItems(text);
  };

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
    setLoading(false);
  };

  function filterItems(text) {
    setTextFilter(text);
    const items = products;

    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredItems(filteredItems);
  }

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="header"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "16px",

            padding: "12px",

            width: "100%",
            height: "auto",
            backgroundColor: "#e9e9e9",
            borderRadius: "16px",
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
            marginTop: "0px",
            gap: "16px",
            borderRadius: "16px",

            backgroundColor: "",

            height: "auto",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: "16px",
                  height: "100%",
                }}
              >
                <div
                  className="left-menu"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    gap: "16px",

                    padding: "16px",
                    backgroundColor: "#e9e9e9",
                    width: "15%",
                    height: "100%",
                    borderRadius: "16px",
                  }}
                >
                  <p>Todas Ofertas</p>
                  <p>100% - 80%</p>
                  <p>80% - 70%</p>
                  <p>70% - 50%</p>
                  <p>50% - 20%</p>
                  <p>20% - 0%</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    width: "100%",
                    height: "fit-content",
                  }}
                >
                  <SearchBar inputValue={inputValue} />
                  <div
                    className="body-products"
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#e9e9e9",
                      padding: "16px",
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    {textFilter == 0 ? (
                      <div
                        style={{
                          height: "auto",
                        }}
                      >
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
                      </div>
                    ) : (
                      <>
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            gap: "10px",
                            padding: "8px",
                            background: "white",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <>
                            {filteredItems.length == 0 ? (
                              <>Nenhum item foi encontrado :(</>
                            ) : (
                              <>
                                {filteredItems.map(
                                  ({
                                    id,
                                    name,
                                    price,
                                    discount,
                                    real_price,
                                    image_url,
                                  }) => (
                                    <CardProduct
                                      key={id}
                                      name={name}
                                      price={price}
                                      discount={`${(discount * 100).toFixed(
                                        2
                                      )}%`}
                                      image={image_url}
                                      real_price={real_price}
                                    />
                                  )
                                )}
                              </>
                            )}
                          </>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LayoutMarkets;
