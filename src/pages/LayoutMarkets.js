import React, { useEffect, useState, useMemo } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initial, inMarket } from "../redux/statusViewSlice";
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
import getNewProductsStore from "../services/getNewProducts";
import getProducts from "../services/getProducts";
import getInfosStore from "../services/getInfosStore";
import {
  S_ContainerButtonAbsolute,
  S_HeaderContainer,
} from "../styles/Home.styles";
import LocationTag from "../components/widgets/LocationTag";
import { theme } from "../styles/theme";
import { S_ToastContainer } from "../styles/CardProduct.styles";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const LayoutMarkets = () => {
  const [infosStore, setInfosStore] = useState({});
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [textFilter, setTextFilter] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { store_id } = useParams();
  const dispatch = useDispatch();

  const loc_store_name = location?.state?.store_name;
  const loc_store_id = location?.state?.store_id;

  const goToHome = () => {
    dispatch(initial());
    navigate("/"); // Navega para a rota "/about"
  };

  useEffect(() => {
    dispatch(inMarket());
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [store_id]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const storeInfos = await getInfosStore({ store_id: store_id });
      setInfosStore(storeInfos);

      const products = await getProducts({
        store_id: store_id,
        store_type: storeInfos.store_type_id,
        parent_store_type: storeInfos.store_type.parent_id,
      });
      setProducts(products);
      setLoading(false);

      const newProducts = await getNewProductsStore({
        store_id: store_id,
        store_type: storeInfos.store_type_id,
        parent_store_type: storeInfos.store_type.parent_id,
      });

      setNewProducts(newProducts.products);
    } catch (error) {
      return error;
    }
  };

  const handleInputChange = (text) => {
    setTextFilter(text);
  };

  const handleSearch = (text) => setTextFilter(text);

  const debouncedQuery = useDebouncedValue(textFilter, 800);

  const filteredItems = useMemo(() => {
    if (!products.all) return [];

    return products.all.filter((item) =>
      item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery, products.all]);

  return (
    <>
      <S_ToastContainer
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
        <S_HeaderContainer>
          <S_ContainerButtonAbsolute></S_ContainerButtonAbsolute>
          <SearchBar inputValue={handleInputChange} />
        </S_HeaderContainer>

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
              {/* <SearchBar inputValue={handleSearch} widthSearchArea="60%" /> */}
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
                  Sem produtos em oferta no momento
                </div>
              ) : (
                <ContainerAccordionProducts
                  new_products={newProducts}
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
