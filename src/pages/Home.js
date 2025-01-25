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
  S_ContainerChips,
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
import returnTop from "../utils/returnTop";

const Home = () => {
  const [textFilter, setTextFilter] = useState("");
  const [storesGroups, setStoresGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(true);

  const dispatch = useDispatch();
  const statusView = useSelector((state) => state.statusView.status_view);

  const handleInputChange = (text) => {
    setTextFilter(text);
  };

  const returnInitial = () => {
    returnTop();

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
    setStoresGroups(stores);
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
                    // border: '1px solid',
                    fontSize: `clamp(1rem, 1.5rem, 2rem)`,
                  }}
                >
                  Filtro de Ofertas do Rappi
                </h1>
                <S_SearchbarContainer>
                  <SearchBar
                    inputValue={handleInputChange}
                    widthSearchArea="100%"
                  />
                  {statusView == "INITIAL_VIEW" && (
                    <S_ContainerChips>
                      {Object.entries(storesGroups).map(([group]) => (
                        <Chip
                          key={group} // Sempre use uma key única!
                          style={{ textTransform: "capitalize" }}
                          size="small"
                          color="info"
                          label={`${group}`}
                          href={`#${group}`}
                          component="a"
                        />
                      ))}
                    </S_ContainerChips>
                  )}
                </S_SearchbarContainer>
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
                      {Object.entries(storesGroups).map(([group, stores]) => {
                        return (
                          <S_containerStores id={`${group}`}>
                            <h1
                              style={{
                                textTransform: "capitalize",
                              }}
                            >
                              {group}
                            </h1>
                            <S_BoxStores>
                              {stores.map(
                                ({ store_id, store_img, store_name }) => (
                                  <CardMarkets
                                    key={store_id}
                                    store_id={store_id}
                                    store_name={store_name}
                                    img_path={store_img}
                                  />
                                )
                              )}
                            </S_BoxStores>
                          </S_containerStores>
                        );
                      })}
                      {/* {storesGroups.map((stores) => {
                        return (
                          <S_containerStores id="turbo">
                            <h1>Turbo</h1>
                            <S_BoxStores>
                              {storesGroups
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
                        );
                      })} */}

                      {/* <S_containerStores id="markets">
                        <h1>Mercados</h1>
                        <S_BoxStores>
                          {storesGroups
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
                          {storesGroups
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

                      <S_containerStores id="shopping">
                        <h1>Shopping</h1>
                        <S_BoxStores>
                          {storesGroups
                            .filter(
                              (market) =>
                                market.sub_group.toLowerCase() == "hogar"
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

                      <S_containerStores id="especializada">
                        <h1>Especializada</h1>
                        <S_BoxStores>
                          {storesGroups.especializada.map(
                            ({ store_id, store_img, store_name }) => (
                              <CardMarkets
                                key={store_id}
                                store_id={store_id}
                                store_name={store_name}
                                img_path={store_img}
                              />
                            )
                          )}
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
