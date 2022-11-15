import React from "react";
import { useState, useEffect, createContext, useContext } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Top100 from "./pages/Top100";
import LoginUser from "./features/LoginUser";

import Coins from "./pages/Coins";
import SearchResults from "./pages/SeacrhResults";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterUser from "./features/RegisterUser";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  //  xreate useEffect hook to fetch data from API
  // uSE ASYNN/AWAIT
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const data = await response.json();
        setData(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function toggleRegisterUser() {
    setIsRegistered(true);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          {isRegistered ? (
            <Route path="/" element={<Home data={data} />} />
          ) : (
            <Route path="/" element={<RegisterUser />} />
          )}
          <Route path="/landingpage" element={<LandingPage />} />

          <Route path="/top100" element={<Top100 data={data} />} />
          <Route path="/search" element={<SearchResults data={data} />} />
          <Route path="/coins" element={<Coins data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
