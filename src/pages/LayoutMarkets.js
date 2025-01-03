import { Box, Chip, IconButton, Skeleton } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getProducts from "../services/getProducts";
import AccordionProducts from "../components/AccordionProducts";
import getInfosStore from "../services/getInfosStore";
import SearchBar from "../components/SearchBar";
import CardProduct from "../components/CardProduct";
import ContainerAccordionProducts from "../components/ContainerAccordionProducts";
import { useDispatch } from "react-redux";
import { initial } from "../redux/statusViewSlice";
import { S_BoxChips } from "../styles/LayoutMarkets.styles";
const moment = require("moment");

const LayoutMarkets = ({ id_store, parent_store_type, store_type, name }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [infosStore, setInfoStore] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    get_infosStore();
    get_products();
  }, []);

  const inputValue = (text) => {
    filterItems(text);
  };

  function filterItems(text) {
    setTextFilter(text);
    const items = products;

    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredItems(filteredItems);
  }

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
            <Link to="/" onClick={() => dispatch(initial())}>
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

            <S_BoxChips>
              <Chip label={`ID: ${id_store}`} color="info" size="small" />
              <Chip label={infosStore.address} color="info" size="small" />
              <Box>
                <Chip
                  label={` ${products.length} itens`}
                  color="info"
                  size="small"
                />
              </Box>
            </S_BoxChips>
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
            // height: "100%",
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    width: "100%",
                    height: "fit-content",
                  }}
                >
                  <SearchBar inputValue={inputValue} widthSearchArea="60%" />
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
                    {textFilter.length === 0 ? (
                      <ContainerAccordionProducts products={products} />
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
                            {filteredItems.length === 0 ? (
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
                                    quantity,
                                    unit_type,
                                  }) => (
                                    <CardProduct
                                      unit_type={unit_type}
                                      quantity={quantity}
                                      key={id}
                                      name={name}
                                      price={price}
                                      discount={`${(discount * 100).toFixed(
                                        1
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
