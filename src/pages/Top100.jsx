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

function Top100({ data }) {
  // TODO: add slider to select number of coins to display

  return (
    <div>
      <Heading
        fontFamily={"Karla"}
        color={"gray.700"}
        mt={10}
        as="h3"
        size="xl"
        textAlign="center"
      >
        Top-100 Cryptocurrencies by Market Capitalization
      </Heading>
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        minH="100vh"
      >
        <TableContainer mt={10} bg="brand.200">
          <Table colorScheme={"gray"} variant="striped">
            <TableCaption>Top 100 Cryptocurrencies</TableCaption>
            <Thead>
              <Tr>
                <Th fontSize={16}>Rank</Th>
                <Th fontSize={16}>Name</Th>
                <Th fontSize={16}>Symbol</Th>
                <Th fontSize={16}>Price</Th>
                <Th fontSize={16}>Market Cap</Th>
                <Th fontSize={16}>24h Change</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((coin) => (
                <Tr key={coin.id} fontSize={"lg"} fontWeight={500}>
                  <Td fontSize={20}>{coin.market_cap_rank}</Td>

                  <Td fontSize={20} fontWeight={500}>
                    {coin.name}
                  </Td>
                  <Td fontSize={20} fontFamily="Inter" fontWeight={500}>
                    {coin.symbol.toUpperCase()}
                  </Td>
                  <Td fontSize={20} fontFamily="Inter" fontWeight={500}>
                    ${coin.current_price.toLocaleString()}
                  </Td>
                  <Td fontSize={20} fontFamily="Inter" fontWeight={500}>
                    ${coin.market_cap.toLocaleString()}
                  </Td>
                  <Td fontSize={22} fontWeight={500}>
                    {coin.price_change_percentage_24h.toFixed(2)} %
                  </Td>
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

export default Top100;
