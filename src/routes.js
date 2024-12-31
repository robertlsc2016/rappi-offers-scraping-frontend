import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LayoutMarkets from "./pages/LayoutMarkets";

const Routes_ = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={
            <LayoutMarkets
              name={"Turbo"}
              id_store={900604367}
              parent_store_type="avocado_home"
              store_type="turbo"
            />
          }
          path="/turbo"
        />
        <Route
          element={
            <LayoutMarkets
              name={"Carrefour"}
              id_store={900542505}
              parent_store_type="market"
              store_type="carrefour_hiper_super_market"
            />
          }
          path="/carrefour"
        />
        <Route
          element={
            <LayoutMarkets
              name={"Pão de Açúcar"}
              id_store={900536162}
              parent_store_type="market"
              store_type="pao_de_azucar"
            />
          }
          path="/pao-de-acucar"
        />
        <Route
          element={
            <LayoutMarkets
              name={"Mambo"}
              id_store={900020818}
              parent_store_type="market"
              store_type="mambo"
            />
          }
          path="/mambo"
        />
        <Route
          element={
            <LayoutMarkets
              name={"Barbosa"}
              id_store={900156624}
              parent_store_type="market"
              store_type="barbosa_super"
            />
          }
          path="/barbosa"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes_;
