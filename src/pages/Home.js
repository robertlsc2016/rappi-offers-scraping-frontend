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
import GetLocation from "../components/GetLocation";
import ChangeLocation from "../components/actions-buttons/ChangeLocation";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

const Home = () => {
  const [textFilter, setTextFilter] = useState("");
  const [storesGroups, setStoresGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});

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
    get_location();
    dispatch(initial());
  }, []);

  const get_stores = async () => {
    const stores = await getStores();
    setStoresGroups(stores);
    setIsLoading(false);
  };

  const get_location = async () => {
    const location = await getLocalStorage({ name: "location" });

    if (!location) {
      localStorage.removeItem("getStores");
      localStorage.removeItem("location");
      localStorage.removeItem("getStores-time");
    }

    if (location) {
      get_stores();
    }

    setLocation(location);
  };

  const clearLocation = () => {
    localStorage.removeItem("getStores");
    localStorage.removeItem("location");
    localStorage.removeItem("getStores-time");
    window.location.reload();
  };

  return (
    <>
      {!location && <GetLocation />}

      {location && (
        <>
          <div
            style={{
              display: "flex",
              gap: "16px",
              zIndex: "1000",
              cursor: "pointer",
              // background: "#e9e9e9",
              position: "fixed",
              top: "32px",
              left: "32px",
              // border: "1px solid",
              width: "auto",
              height: "auto",
            }}
          >
            <S_IconButton id="homeIconButton" onClick={() => returnInitial()}>
              <HomeIcon />
            </S_IconButton>

            <S_IconButton>
              <LocationSearchingIcon
                fontSize="inherit"
                onClick={() => clearLocation()}
              />
            </S_IconButton>
          </div>

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
                      {Object.entries(storesGroups).map(([group, stores]) => {
                        if (stores.length > 0) {
                          return (
                            <Chip
                              key={group} // Sempre use uma key única!
                              style={{ textTransform: "capitalize" }}
                              size="small"
                              color="info"
                              label={`${group}`}
                              href={`#${group}`}
                              component="a"
                            />
                          );
                        }
                      })}
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
                        if (stores.length > 0) {
                          return (
                            <>
                              <S_containerStores
                                key={group}
                                id={`${group} ${stores.length}`}
                              >
                                <h1
                                  style={{
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {group}
                                </h1>

                                <S_BoxStores>
                                  {stores?.map(
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
                            </>
                          );
                        }
                      })}
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
