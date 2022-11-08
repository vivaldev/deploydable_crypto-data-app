import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import Charts from "./pages/Charts";
import Search from "./pages/Search";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
