import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

function Charts({ data }) {
  return (
    <div>
      <Heading
        fontFamily={"Karla"}
        color={"blue.600"}
        mt={10}
        as="h3"
        size="xl"
        textAlign="center"
      >
        Top-100 Cryptocurrencies by Market Capitalization
      </Heading>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <TableContainer mt={10}>
          <Table colorScheme={"blue"} variant="striped">
            <TableCaption>Top 100 Cryptocurrencies</TableCaption>
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Name</Th>
                <Th>Symbol</Th>
                <Th>Price</Th>
                <Th>Market Cap</Th>
                <Th>24h Change</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((coin) => (
                <Tr key={coin.id} fontSize={"lg"}>
                  <Td>{coin.market_cap_rank}</Td>
                  <Td>{coin.name}</Td>
                  <Td>{coin.symbol.toUpperCase()}</Td>
                  <Td>${coin.current_price.toLocaleString()}</Td>
                  <Td>${coin.market_cap.toLocaleString()}</Td>
                  <Td>{coin.price_change_percentage_24h.toFixed(2)} %</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Rank</Th>
                <Th>Name</Th>
                <Th>Symbol</Th>
                <Th>Price</Th>
                <Th>Market Cap</Th>
                <Th>24h Change</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </div>
  );
}

export default Charts;
