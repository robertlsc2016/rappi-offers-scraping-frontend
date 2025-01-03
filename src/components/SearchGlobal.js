import { useEffect, useState } from "react";
import globalSearchProduct from "../services/globalSearchProduct";
import { Avatar, CircularProgress } from "@mui/material";
import EmblaCarousel from "./carousel/EmblaCarousel";

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
    const products = await globalSearchProduct({
      query: query,
    });
    setLoading(false);
    setStores(products);

    const products1 = stores.map((store) => {
      return store.products.sort((a, b) => a.price - b.price);
    });
  };

  const OPTIONS = { align: "start" };

  return (
    <>
      {loading && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "30vh",
            }}
          >
            <CircularProgress size="30px" />
          </div>
        </>
      )}
      {!loading &&
        stores.map((store) => (
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
                src={`https://images.rappi.com.br/marketplace/${store.logo}`}
              />

              <div>{store.store_name}</div>
            </div>

            <div>
              <div>
                <EmblaCarousel
                  slides={store.products.sort((a, b) => a.price - b.price)}
                  options={OPTIONS}
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SearchGlobal;
