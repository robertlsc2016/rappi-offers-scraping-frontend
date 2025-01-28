import { useEffect, useState } from "react";
import globalSearchProduct from "../services/globalSearchProduct";
import { Avatar, CircularProgress } from "@mui/material";
import EmblaCarousel from "./carousel/EmblaCarousel";
import getLocalStorage from "../services/LocalStorage/getLocalStorage";
import { S_ContainerSearchGlobal } from "../styles/SearchGlobal.styles";

const SearchGlobal = ({ text }) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(text);
    }, 800);

    setLoading(true);
    return () => clearTimeout(handler);
  }, [text]);

  useEffect(() => {
    if (debouncedQuery) {
      getProducts(debouncedQuery);
    }
  }, [debouncedQuery]);

  const getProducts = async (query) => {
    const location = await getLocalStorage({ name: "location" });

    const products = await globalSearchProduct({
      query: query,
      lat: location.geolocation.lat,
      lng: location.geolocation.lng,
    });

    setLoading(false);
    setStores(products);
  };

  const OPTIONS = { align: "start" };

  return (
    <>
      {loading && (
        <>
          <S_ContainerSearchGlobal>
            <CircularProgress size="30px" />
            <p
              style={{
                fontSize: "12px",
                color: "gray",
              }}
            >
              Calma ae que essa busca é pesada!
            </p>
          </S_ContainerSearchGlobal>
        </>
      )}
      {!loading &&
        stores.map(
          (store) =>
            store.products.length > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: "16px",
                    gap: "16px",
                  }}
                >
                  <Avatar
                    sx={{ width: 48, height: 48 }}
                    src={`https://images.rappi.com.br/marketplace/${store.store_image}`}
                  />

                  <div>{store.name}</div>
                </div>

                <div>
                  <div>
                    <EmblaCarousel slides={store.products} options={OPTIONS} />
                  </div>
                </div>
              </div>
            )
        )}
    </>
  );
};

export default SearchGlobal;
