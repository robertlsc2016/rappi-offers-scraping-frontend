import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LayoutMarkets from "./pages/LayoutMarkets";
import getStores from "./services/getStores";

const Routes_ = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    get_stores();
  }, []);

  const get_stores = async () => {
    const stores = await getStores();
    setStores(stores);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />

        {stores.map(
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
