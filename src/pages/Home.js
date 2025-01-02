import React, { useState } from "react";
import CardMarkets from "../components/CardMarkets";
import markets from "../data/markets";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";

import SearchGlobal from "../components/SearchGlobal";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { initial, search } from "../redux/statusViewSlice";

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

  return (
    <>
      {
        <IconButton
          onClick={() => returnInitial()}
          style={{
            zIndex: "1000",
            cursor: "pointer",
            background: "#e9e9e9",
            position: "fixed",
            top: "32px",
            left: "32px",
          }}
        >
          <HomeIcon
            style={{
              fontSize: "24px",
            }}
          />
        </IconButton>
      }
      <div
        style={{
          // border: "1px solid",
          paddingBottom: "27vh",
          width: "100%",
          height: "fit-content",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            top: "0",
            width: "100%",
            height: "25vh",
            // padding: "16px",
            zIndex: "100",
            // borderRadius: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              background: "white",

              // border: "1px solid",
              gap: "16px",
              width: "50%",
              padding: "16px",
              borderRadius: "32px",
              boxShadow: `rgba(0, 0, 0, 0.56) 0px 4px 50px 5px`,
            }}
          >
            <h1
              style={{
                margin: "0",
                padding: "0",
                // width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Filtro de Ofertas do Rappi
            </h1>
            <div style={{ width: "100%" }}>
              <SearchBar inputValue={handleInputChange} widthSearchArea="95%" />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            // border: "1px solid",
            padding: "0 10%",
            marginTop: "28vh",
          }}
        >
          <div
            style={{
              // border: "1px solid",
              display: "flex",
              flexDirection: "column",
              gap: "64px",
              width: "100%",
              height: "auto",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              {statusView == "SEARCHING_VIEW" && (
                <SearchGlobal text={textFilter} />
              )}

              {statusView == "INITIAL_VIEW" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      // border: "1px solid",
                    }}
                  >
                    <h1
                      style={{
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      Mercados
                    </h1>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flexWrap: "wrap",

                        height: "fit-content",

                        gap: "10px",
                        width: "100%",
                        // padding: "0 16px",
                      }}
                    >
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
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <h1
                      style={{
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      Farmácia
                    </h1>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flexWrap: "wrap",

                        height: "fit-content",

                        gap: "10px",
                        width: "100%",
                        // padding: "0 16px",
                      }}
                    >
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
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
