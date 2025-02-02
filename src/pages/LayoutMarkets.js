import React, { useEffect, useState, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inMarket } from "../redux/statusViewSlice";
import { Chip, CircularProgress } from "@mui/material";
import SearchBar from "../components/SearchBar";
import CardProduct from "../components/CardProduct";
import ContainerAccordionProducts from "../components/ContainerAccordionProducts";
import {
  S_LayoutMarketsContainer,
  S_BodyMarket,
  S_Header,
  SBoxChips,
} from "../styles/LayoutMarkets.styles";
import useDebouncedValue from "../hooks/useDebouncedValue"; // Debouncing
import getProducts from "../services/getProducts";
import getInfosStore from "../services/getInfosStore";
import LocationTag from "../components/widgets/LocationTag";
import { theme } from "../styles/theme";
import { S_ToastContainer } from "../styles/CardProduct.styles";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import returnTop from "../utils/returnTop";
import HomeButton from "../components/actions-buttons/HomeButton";

const LayoutMarkets = () => {
  const [infosStore, setInfosStore] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [textFilter, setTextFilter] = useState("");

  const location = useLocation();

  const { store_id } = useParams();
  const dispatch = useDispatch();

  const loc_store_name = location?.state?.store_name;
  const loc_store_id = location?.state?.store_id;

  useEffect(() => {
    dispatch(inMarket());
    fetchData();
  }, [store_id]);

  const fetchData = async () => {
    setLoading(true);
    returnTop();

    try {
      const storeInfos = await getInfosStore({ store_id: store_id });
      setInfosStore(storeInfos);

      const products = await getProducts({
        store_id: store_id,
        store_type: storeInfos.store_type_id,
        parent_store_type: storeInfos.store_type_id,
      });

      setProducts(products);
      setLoading(false);
    } catch (error) {
      return error;
    }
  };

  const handleInputChange = (text) => {
    setTextFilter(text);
  };

  const debouncedQuery = useDebouncedValue(textFilter, 800);

  const filteredItems = useMemo(() => {
    if (!products.all) return [];
    // returnTop();

    return products.all.filter((item) =>
      item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery, products.all]);

  useEffect(() => {
    setTextFilter("");
  }, [location.pathname]);

  return (
    <>
      <S_ToastContainer
        stacked
        icon={({ type }) => {
          switch (type) {
            case "error":
              return <TrendingDownIcon fontSize="inherit" />;

            case "info":
              return <DeleteOutlineIcon fontSize="inherit" />;
          }
        }}
      />
      <LocationTag />
      <S_LayoutMarketsContainer>
        {!loading && products.all.length > 0 && (
          <SearchBar inputValue={handleInputChange} from={"market"} />
        )}

        {!loading && (
          <S_Header>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                // border: "1px solid",

                height: "100%",
                width: "80%",
                gap: "4px",
              }}
            >
              <>
                <h1
                  style={{
                    margin: 0,
                    width: "100%",
                    padding: 0,
                    fontSize: "24px",
                    // border: "1px solid",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {loc_store_name || infosStore.name}
                </h1>
                <SBoxChips>
                  <Chip
                    style={{
                      background: `${theme.colors.default_blue}`,
                      color: "white",
                      maxWidth: "60%",
                      minWidth: "auto",
                    }}
                    label={`ID: ${infosStore.address}`}
                    size="small"
                  />

                  <Chip
                    label={`ID: ${loc_store_id || infosStore.store_id}`}
                    style={{
                      background: `${theme.colors.default_blue}`,
                      color: "white",
                    }}
                    size="small"
                  />

                  <Chip
                    label={`${products?.all?.length || 0} itens`}
                    style={{
                      background: `${theme.colors.default_blue}`,
                      color: "white",
                    }}
                    size="small"
                  />
                </SBoxChips>
              </>
            </div>
          </S_Header>
        )}

        <S_BodyMarket>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // border: "1px solid",
                width: "100%",
                height: "60vh",
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            <>
              {debouncedQuery ? (
                filteredItems.length ? (
                  filteredItems.map((product) => {
                    return <CardProduct key={product.id} {...product} />;
                  })
                ) : (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Nada encontrado
                  </div>
                )
              ) : products.products_count == 0 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "fixed",
                      bottom: "8px",
                    }}
                  >
                    <HomeButton />
                  </div>
                  Sem produtos em oferta no momento
                </div>
              ) : (
                <ContainerAccordionProducts
                  products={products}
                  store_id={store_id}
                  store_type={infosStore?.store_type?.parent_id}
                />
              )}
            </>
          )}
        </S_BodyMarket>
      </S_LayoutMarketsContainer>
    </>
  );
};

export default LayoutMarkets;
