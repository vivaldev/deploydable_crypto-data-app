import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";
import Charts from "./pages/Charts";
import Search from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home data={data} />} />
        <Route path="/charts" element={<Charts data={data} />} />
        <Route path="/search" element={<Search data={data} />} />
      </Routes>
    </div>
  );
};

export default App;
