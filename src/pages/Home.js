import React, { useEffect, useState } from "react";
import CardMarkets from "../components/CardMarkets";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import HomeIcon from "@mui/icons-material/Home";

import SearchGlobal from "../components/SearchGlobal";
import { initial } from "../redux/statusViewSlice";
import {
  S_BodyHomeBox,
  S_BodyHomeContainer,
  S_BodyHomeInner,
  S_BoxStores,
  S_containerStores,
  S_GlobalContainer,
  S_Header,
  S_HeaderContainer,
  S_IconButton,
  S_SearchbarContainer,
} from "../styles/Home.styles";
import { Chip } from "@mui/material";
import getStores from "../services/getStores";
// import GetLocation from "../components/GetLocation";
import getLocalStorage from "../services/LocalStorage/getLocalStorage";

const Home = () => {
  const [textFilter, setTextFilter] = useState("");
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(true);

  const dispatch = useDispatch();
  const statusView = useSelector((state) => state.statusView.status_view);

  const handleInputChange = (text) => {
    setTextFilter(text);
  };

  const returnInitial = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    document.getElementById("searchBar").value = "";
    document.getElementById("searchBar").innerHTML = "";
    handleInputChange("");
    setTextFilter("");

    dispatch(initial());
  };

  useEffect(() => {
    get_stores();
    dispatch(initial());
  }, []);

  const get_stores = async () => {
    const stores = await getStores();
    setStores(stores);
    setIsLoading(false);
  };

  const get_location = () => {
    const location = getLocalStorage({ name: "location" });
  };

  return (
    <>
      {/* <GetLocation /> */}

      {location && (
        <>
          <S_IconButton id="homeIconButton" onClick={() => returnInitial()}>
            <HomeIcon />
          </S_IconButton>
          <S_GlobalContainer>
            <S_HeaderContainer>
              <S_Header>
                <h1
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: `clamp(1rem, 1.5rem, 2rem)`,
                  }}
                >
                  Filtro de Ofertas do Rappi
                </h1>
                <S_SearchbarContainer>
                  <SearchBar
                    inputValue={handleInputChange}
                    widthSearchArea="95%"
                  />
                </S_SearchbarContainer>
                {statusView == "INITIAL_VIEW" && (
                  <>
                    <div
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "16px",
                        width: "100%",
                      }}
                    >
                      <Chip
                        color="info"
                        label="Mercados"
                        href="#markets"
                        component="a"
                      />
                      <Chip
                        color="info"
                        label="Farmácia"
                        href="#drugstore"
                        component="a"
                      />
                      <Chip
                        color="info"
                        label="Shopping"
                        href="#shopping"
                        component="a"
                      />
                    </div>
                  </>
                )}
              </S_Header>
            </S_HeaderContainer>

            <S_BodyHomeContainer>
              <S_BodyHomeBox>
                <S_BodyHomeInner>
                  {statusView == "SEARCHING_VIEW" && (
                    <SearchGlobal text={textFilter} />
                  )}

                  {statusView == "INITIAL_VIEW" && !isLoading && (
                    <>
                      <S_containerStores id="markets">
                        <h1>Turbo</h1>
                        <S_BoxStores>
                          {stores
                            .filter(
                              (market) =>
                                market.sub_group.toLowerCase() == "turbo"
                            )
                            .map(({ store_id, store_img, store_name }) => (
                              <CardMarkets
                                key={store_id}
                                store_id={store_id}
                                store_name={store_name}
                                img_path={store_img}
                              />
                            ))}
                        </S_BoxStores>
                      </S_containerStores>

                      <S_containerStores id="markets">
                        <h1>Mercados</h1>
                        <S_BoxStores>
                          {stores
                            .filter(
                              (market) =>
                                market.sub_group.toLowerCase() == "super"
                            )
                            .map(({ store_id, store_img, store_name }) => (
                              <CardMarkets
                                key={store_id}
                                store_id={store_id}
                                store_name={store_name}
                                img_path={store_img}
                              />
                            ))}
                        </S_BoxStores>
                      </S_containerStores>

                      <S_containerStores id="drugstore">
                        <h1>Farmácia</h1>
                        <S_BoxStores>
                          {stores
                            .filter(
                              (market) =>
                                market.sub_group.toLowerCase() == "farmacia"
                            )
                            .map(({ store_id, store_img, store_name }) => (
                              <CardMarkets
                                key={store_id}
                                store_id={store_id}
                                store_name={store_name}
                                img_path={store_img}
                              />
                            ))}
                        </S_BoxStores>
                      </S_containerStores>

                      {/* <S_containerStores id="shopping">
                        <h1>Shopping</h1>
                        <S_BoxStores>
                          {stores
                            .filter((market) => market.type == "shopping")
                            .map(({ name, route, banner_url, store_id }) => (
                              <CardMarkets
                                name={name}
                                route={route}
                                img_path={banner_url}
                                key={store_id}
                              />
                            ))}
                        </S_BoxStores>
                      </S_containerStores> */}
                    </>
                  )}
                </S_BodyHomeInner>
              </S_BodyHomeBox>
            </S_BodyHomeContainer>
          </S_GlobalContainer>
        </>
      )}
    </>
  );
};

export default Home;
