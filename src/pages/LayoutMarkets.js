import React, { useEffect, useState, useMemo } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initial } from "../redux/statusViewSlice";
import { Chip, IconButton, CircularProgress } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import SearchBar from "../components/SearchBar";
import CardProduct from "../components/CardProduct";
import ContainerAccordionProducts from "../components/ContainerAccordionProducts";
import { ActionButtons } from "../components/actions-buttons/ActionButtons";
import {
  S_LayoutMarketsContainer,
  S_BodyMarket,
  S_Header,
  SBoxChips,
} from "../styles/LayoutMarkets.styles";
import useFetchStoreData from "../hooks/useFetchStoreData"; // Hook personalizado
import useDebouncedValue from "../hooks/useDebouncedValue"; // Debouncing

const LayoutMarkets = () => {
  const location = useLocation();

  const { store_id } = useParams();
  const dispatch = useDispatch();

  const [textFilter, setTextFilter] = useState("");
  const [loadingRoute, setLoadingRoute] = useState(false); // Estado para rota
  const debouncedQuery = useDebouncedValue(textFilter, 800);

  const { storeInfos, products, newItems, loading, error } =
    useFetchStoreData(store_id); // Hook reutilizável

  const filteredItems = useMemo(() => {
    if (!products.all) return [];

    return products.all.filter((item) =>
      item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery, products.all]);

  const handleSearch = (text) => setTextFilter(text);

  useEffect(() => {
    setLoadingRoute(true);
    const timer = setTimeout(() => setLoadingRoute(false), 500); // Simula tempo de carregamento
    return () => clearTimeout(timer); // Limpa timeout anterior
  }, [location]);

  return (
    <S_LayoutMarketsContainer>
      <ActionButtons />
      <S_Header>
        <Link
          to="/"
          onClick={() => dispatch(initial())}
          style={{
            width: "auto",
          }}
        >
          <IconButton>
            <WestIcon />
          </IconButton>
        </Link>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",

            height: "100%",
            width: "100%",
            gap: "4px",
          }}
        >
          {!loadingRoute && (
            <>
              <h1 style={{ margin: 0, padding: 0, fontSize: "24px" }}>
                {location.state
                  ? location.state.store_name
                  : storeInfos
                  ? storeInfos.name
                  : "..."}
              </h1>
              <SBoxChips>
                {storeInfos?.address && (
                  <Chip
                    style={{
                      maxWidth: "60%",
                      minWidth: "auto",
                    }}
                    label={`ID: ${storeInfos.address}`}
                    color="info"
                    size="small"
                  />
                )}

                {(location?.state?.store_name || storeInfos.name) && (
                  <Chip
                    label={`ID: ${
                      location.state
                        ? location.state.store_id
                        : storeInfos
                        ? storeInfos.store_id
                        : "..."
                    }`}
                    color="info"
                    size="small"
                  />
                )}

                {!loading ||
                  (loadingRoute && (
                    <Chip
                      label={`${products?.all?.length || 0} itens`}
                      color="info"
                      size="small"
                    />
                  ))}
              </SBoxChips>
            </>
          )}
        </div>
      </S_Header>
      <S_BodyMarket>
        {loading || loadingRoute ? (
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
            <SearchBar inputValue={handleSearch} widthSearchArea="60%" />
            {debouncedQuery ? (
              filteredItems.length ? (
                filteredItems.map((product) => {
                  console.log(product);
                  return <CardProduct key={product.id} {...product} />;
                })
              ) : (
                <p>Nada encontrado</p>
              )
            ) : (
              <ContainerAccordionProducts
                new_products={newItems}
                products={products}
                store_id={store_id}
                store_type={storeInfos?.store_type?.parent_id}
              />
            )}
          </>
        )}
      </S_BodyMarket>
    </S_LayoutMarketsContainer>
  );
};

export default LayoutMarkets;
