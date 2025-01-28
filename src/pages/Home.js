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
  S_ContainerButtonAbsolute,
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
import getLocalStorage from "../services/LocalStorage/getLocalStorage";
import returnTop from "../utils/returnTop";
import GetLocation from "../components/GetLocation";
import ChangeLocation from "../components/actions-buttons/ChangeLocation";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import InitialApresentation from "../components/widgets/InitialApresentation";
import LocationTag from "../components/widgets/LocationTag";

const Home = () => {
  const [textFilter, setTextFilter] = useState("");
  const [storesGroups, setStoresGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [chipsStoreGroups, setChipsStoreGroups] = useState([]);

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
    returnTop();
    get_location();
    dispatch(initial());
  }, []);

  const get_stores = async () => {
    try {
      const stores = await getStores();

      if (stores.status == 204) {
        setStoresGroups([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);

      const chipGroupStores = Object.entries(stores)
        .map(([group, stores]) => {
          if (stores.length > 0) {
            return group;
          }
        })
        .filter((store) => store);

      setChipsStoreGroups(chipGroupStores);

      setStoresGroups(stores);
    } catch (err) {
      setIsLoading(false);
      setStoresGroups([]);
    }
  };

  const get_location = async () => {
    const location = await getLocalStorage({ name: "location" });

    if (!location) {
      setIsLoading(false);

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
      <InitialApresentation />
      {!location && <GetLocation />}

      {location && (
        <>
          <LocationTag />
          <S_GlobalContainer>
            <S_HeaderContainer>
              {/* <S_ContainerButtonAbsolute>
                {statusView !== "INITIAL_VIEW" && (
                  <S_IconButton
                    id="homeIconButton"
                    onClick={() => returnInitial()}
                  >
                    <HomeIcon />
                  </S_IconButton>
                )}

                <S_IconButton>
                  <LocationSearchingIcon
                    fontSize="inherit"
                    onClick={() => clearLocation()}
                  />
                </S_IconButton>
              </S_ContainerButtonAbsolute> */}

              <SearchBar inputValue={handleInputChange} />
            </S_HeaderContainer>

            <S_BodyHomeContainer>
              {storesGroups.length == 0 && !isLoading && (
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <p>Não existem lojas disponíveis na sua localidade :(</p>
                  <p>moras em Xique-Xique Bahia?</p>
                  <iframe
                    width="500"
                    height="300"
                    src="https://www.youtube.com/embed/0QswgI6RBqA?autoplay=1&mute=0?si=qJgHOqdu49oR-r4f"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
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
                            <S_containerStores key={group} id={`${group}`}>
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
