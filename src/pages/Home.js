import React, { useEffect, useState } from "react";
import CardMarkets from "../components/CardMarkets";
import markets from "../data/stores";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import HomeIcon from "@mui/icons-material/Home";

import SearchGlobal from "../components/SearchGlobal";
import { initial } from "../redux/statusViewSlice";
import {
  S_BodyHomeBox,
  S_BodyHomeBoxInner,
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

const Home = () => {
  const [textFilter, setTextFilter] = useState("");
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
    dispatch(initial());
  }, []);

  return (
    <>
      {
        <S_IconButton id="homeIconButton" onClick={() => returnInitial()}>
          <HomeIcon />
        </S_IconButton>
      }
      <S_GlobalContainer>
        <S_HeaderContainer>
          <S_Header>
            <h1
              style={{
                textAlign: "center",
                width: "100%",
                fontSize: `clamp(1rem, 1.5rem, 2rem)`,
                // fontSize:"1.5rem"
              }}
            >
              Filtro de Ofertas do Rappi
            </h1>
            <S_SearchbarContainer>
              <SearchBar inputValue={handleInputChange} widthSearchArea="95%" />
            </S_SearchbarContainer>
            {statusView == "INITIAL_VIEW" && (
              <>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    // justifyContent: "space-around",
                    alignItems: "center",
                    gap: "16px",
                    width: "100%",
                    // border: "1px solid black",
                  }}
                >
                  <Chip label="Mercados" href="#markets" component="a" />
                  <Chip label="Farmácia" href="#drugstore" component="a" />
                  <Chip label="Shopping" href="#shopping" component="a" />
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

              {statusView == "INITIAL_VIEW" && (
                <>
                  <S_containerStores id="markets">
                    <h1>Mercados</h1>
                    <S_BoxStores>
                      {markets
                        .filter((market) => market.type == "market")
                        .map(({ name, route, banner_url, id_store }) => (
                          <CardMarkets
                            name={name}
                            route={route}
                            img_path={banner_url}
                            key={id_store}
                          />
                        ))}
                    </S_BoxStores>
                  </S_containerStores>
                  <S_containerStores id="drugstore">
                    <h1>Farmácia</h1>
                    <S_BoxStores>
                      {markets
                        .filter((market) => market.type == "drugstore")
                        .map(({ name, route, banner_url, id_store }) => (
                          <CardMarkets
                            name={name}
                            route={route}
                            img_path={banner_url}
                            key={id_store}
                          />
                        ))}
                    </S_BoxStores>
                  </S_containerStores>
                  <S_containerStores id="shopping">
                    <h1>Shopping</h1>
                    <S_BoxStores>
                      {markets
                        .filter((market) => market.type == "shopping")
                        .map(({ name, route, banner_url, id_store }) => (
                          <CardMarkets
                            name={name}
                            route={route}
                            img_path={banner_url}
                            key={id_store}
                          />
                        ))}
                    </S_BoxStores>
                  </S_containerStores>
                </>
              )}
            </S_BodyHomeInner>
          </S_BodyHomeBox>
        </S_BodyHomeContainer>
      </S_GlobalContainer>
    </>
  );
};

export default Home;
