import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";
import Charts from "./pages/Charts";
import Search from "./pages/Search";
import Stats from "./pages/Stats";
import Coins from "./pages/Coins";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home data={data} />} />
        <Route path="/charts" element={<Charts data={data} />} />
        <Route path="/search" element={<Search data={data} />} />
        <Route path="/stats" element={<Stats data={data} />} />
        <Route path="/coins" element={<Coins data={data} />} />
      </Routes>
    </div>
  );
};

export default App;
