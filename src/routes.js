import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LayoutMarkets from "./pages/LayoutMarkets";
import markets from "./data/markets";

const Routes_ = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />

        {markets.map(
          ({ name, route, id_store, parent_store_type, store_type }) => (
            <Route
              key={id_store}
              element={
                <LayoutMarkets
                  name={name}
                  id_store={id_store}
                  parent_store_type={parent_store_type}
                  store_type={store_type}
                  key={id_store}
                />
              }
              path={`/${route}`}
            />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Routes_;
