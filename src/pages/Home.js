import React, { useCallback, useEffect, useState } from "react";
import CardMarkets from "../components/CardMarkets";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";

import SearchGlobal from "../components/SearchGlobal";
import { initial } from "../redux/statusViewSlice";
import {
  S_BodyHomeBox,
  S_BodyHomeContainer,
  S_BodyHomeInner,
  S_BoxStores,
  S_containerStores,
  S_GlobalContainer,
  S_HeaderContainer,
} from "../styles/Home.styles";
import getStores from "../services/getStores";
import getLocalStorage from "../services/LocalStorage/getLocalStorage";
import returnTop from "../utils/returnTop";
import GetLocation from "../components/GetLocation";
import InitialApresentation from "../components/widgets/InitialApresentation";
import LocationTag from "../components/widgets/LocationTag";
import LocationUnavailable from "../components/carousel/LocationUnavailable";

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

  useEffect(() => {
    returnTop();
    get_location();
    get_stores();
    dispatch(initial());
  }, []);

  const get_stores = async () => {
    try {
      console.log("entrou aqui");
      const stores = await getStores();
      if (!stores) {
        setIsLoading(false);
        return;
      }

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

  const get_location = () => {
    const location = getLocalStorage({ name: "location" });

    if (!location) {
      setIsLoading(false);

      localStorage.removeItem("location");
      localStorage.removeItem("getStores-time");
    }

    setLocation(location);
  };

  return (
    <>
      <InitialApresentation />
      {!location && <GetLocation />}

      {location && (
        <>
          <LocationTag />
          <S_GlobalContainer>
            {location && !isLoading && storesGroups && (
              <SearchBar
                from={"home"}
                inputValue={handleInputChange}
                stores_group={chipsStoreGroups}
              />
            )}

            <S_BodyHomeContainer>
              {storesGroups.length == 0 && !isLoading && (
                <LocationUnavailable />
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
