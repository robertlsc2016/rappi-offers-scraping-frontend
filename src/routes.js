import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LayoutMarkets from "./pages/LayoutMarkets";
import getStores from "./services/getStores";
import Login from "./pages/Login";

const Routes_ = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:store_id" element={<LayoutMarkets />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes_;
