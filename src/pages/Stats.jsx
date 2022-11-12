import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Stats({ data }) {
  const [oneCoinStats, setOneCoinStats] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //       "https://api.coingecko.com/api/v3/coins/bitcoin?localization=true&market_data=false&community_data=true&developer_data=false&sparkline=false"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setOneCoinStats(data))
  //       .catch((err) => console.log(err));
  //   }, []);
  //   console.log(oneCoinStats);
  return (
    <div>
      <StatGroup>
        <Stat>
          <StatLabel>Market Cap</StatLabel>
          <StatNumber>{oneCoinStats.market_cap_rank}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>24h Change</StatLabel>
          <StatNumber>{oneCoinStats.price_change_percentage_24h}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>24h Volume</StatLabel>
          <StatNumber>{oneCoinStats.total_volume}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </StatGroup>
      {/* <StatGroup>
        <Stat>
          <StatLabel>Market Cap</StatLabel>
          <StatNumber>${data.market_cap}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </StatGroup> */}
    </div>
  );
}

export default Stats;
