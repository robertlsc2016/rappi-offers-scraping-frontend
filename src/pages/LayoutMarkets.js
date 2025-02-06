import React, { useEffect, useState, useMemo, useCallback } from "react";
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
import GenericScreenMessage from "../components/widgets/GenericScreenMessage";
import ProductsFilter from "../components/ProductsFilter";

const LayoutMarkets = () => {
  const [infosStore, setInfosStore] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(true);
  const [error, setError] = useState(false);

  const [textFilter, setTextFilter] = useState("");

  const location = useLocation();

  const { store_id } = useParams();
  const dispatch = useDispatch();

  const loc_store_name = location?.state?.store_name;
  const loc_store_id = location?.state?.store_id;

  useEffect(() => {
    dispatch(inMarket());
    fetchData();
    document.body.style.overflowY = "auto";
  }, [store_id]);

  useEffect(() => {
    dispatch(inMarket());
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    returnTop();

    try {
      const storeInfos = await getInfosStore({ store_id: store_id });
      setInfosStore(storeInfos);

      const products = await getProducts({
        store_id: storeInfos.store_id,
        store_type: storeInfos.store_type,
        parent_store_type: storeInfos.parent_store_type,
      });

      if (products.products_count == 0) {
        document.body.style.overflowY = "hidden";
      }
      setLoading(false);
      setProducts(products);
    } catch (error) {
      setLoading(false);
      setProducts(false);
      setError(true);
    }
  }, []);

  const handleInputChange = (text) => {
    setTextFilter(text);
  };

  const debouncedQuery = useDebouncedValue(textFilter, 100);

  const filteredItems = useMemo(() => {
    if (!products.all) return [];
    returnTop();
    const productsFilter = ProductsFilter({
      products: products.all,
      textFilter: debouncedQuery,
    });

    setLoadingSearch(false);
    return productsFilter;
  }, [debouncedQuery, products.all]);

  useEffect(() => {
    setLoadingSearch(true);
  }, [textFilter]);

  return (
    <>
      {products && (
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
      )}

      <LocationTag />
      <S_LayoutMarketsContainer>
        {products?.all?.length > 0 && (
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
          {loadingSearch ? (
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
              {!error && debouncedQuery !== "" ? (
                filteredItems?.length ? (
                  filteredItems.map((product) => {
                    return <CardProduct key={product.id} {...product} />;
                  })
                ) : (
                  <GenericScreenMessage message={"nada encontrado"} />
                )
              ) : products.products_count == 0 ? (
                <GenericScreenMessage message={"sem produtos em promoção :("} />
              ) : (
                !error && (
                  <ContainerAccordionProducts
                    products={products}
                    store_id={store_id}
                    store_type={infosStore?.store_type?.parent_id}
                  />
                )
              )}
            </>
          )}

          {!loading && error && (
            <GenericScreenMessage
              message={"Erro ao coletar os produtos! Tente novamente :("}
            />
          )}
        </S_BodyMarket>
      </S_LayoutMarketsContainer>
    </>
  );
};

export default LayoutMarkets;
