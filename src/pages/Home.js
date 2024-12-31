import { Divider } from "@mui/material";
import React from "react";
import CardMarkets from "../components/CardMarkets";

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
          <CardMarkets
            name="Turbo"
            route="turbo"
            img_path="https://startse-uploader.s3.us-east-2.amazonaws.com/large_rappi_passo_atras_avancos_varejo_d3472fbd04.jpeg"
          />
          <CardMarkets
            name="Carrefour"
            route="carrefour"
            img_path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2ABhb8jXr8Ad2CF0Qr6jkxWWZ6s9P6VVSw&s"
          />

          <CardMarkets
            name="Pão de Açúcar"
            route="pao-de-acucar"
            img_path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTl6OrE1EUtntSDrM_xGQ_i79qJdq5dBq9g&s"
          />

          <CardMarkets
            name="Mambo"
            route="mambo"
            img_path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qgnY485Unq1_y7JpeIhcWfXiLhcOosAeeQ&s"
          />

          <CardMarkets
            name="Barbosa"
            route="barbosa"
            img_path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cFnZ_W4G3PLXzddGHxCQY4bzM0lZ50G8fA&s"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
