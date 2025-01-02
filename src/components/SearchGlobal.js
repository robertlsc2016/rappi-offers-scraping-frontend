import { useEffect, useState } from "react";
import globalSearchProduct from "../services/globalSearchProduct";
import CardProduct from "./CardProduct";
import AliceCarousel from "react-alice-carousel";
import { Avatar, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const SearchGlobal = ({ text }) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(text);
    }, 800);
    // ;
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
  };

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
              // border: "1px solid",
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
                alt="Remy Sharp"
                sx={{ width: 48, height: 48 }}
                src={`https://images.rappi.com.br/marketplace/${store.logo}`}
              />

              <div>{store.store_name}</div>
            </div>

            <div>
              <div>
                <AliceCarousel
                  // autoWidth
                  paddingRight={70}
                  responsive={{
                    0: { items: 1 },
                    400: { items: 2 },
                    600: { items: 3 },
                    800: { items: 4 },
                    1000: { items: 5 },

                    1200: { items: 7 },
                    // 1200: { items: 5 },
                  }}
                  items={store.products
                    .sort((a, b) => a.price - b.price)
                    .map(
                      ({
                        id,
                        name,
                        image,
                        discount,
                        real_price,
                        price,
                        quantity,
                        unit_type,
                      }) => (
                        <CardProduct
                          key={id}
                          quantity={quantity}
                          unit_type={unit_type}
                          className="item"
                          image={`https://images.rappi.com.br/products/${image}`}
                          name={name}
                          discount={discount}
                          real_price={real_price}
                          price={price}
                        />
                      )
                    )}
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SearchGlobal;
