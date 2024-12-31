import { Divider } from "@mui/material";
import React from "react";
import CardMarkets from "../components/CardMarkets";
import markets from "../data/markets";

const Home = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "0",
          padding: "0",
        }}
      >
        <h1
          style={{
            // width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Filtro de Ofertas do Rappi
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            width: "100%",
          }}
        >
          {markets.map(({ name, route, banner_url, id_store }) => (
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
  );
};

export default Home;
