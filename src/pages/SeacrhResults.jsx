import React, { useState } from "react";
import Search from "../features/Search";
import {
  Flex,
  Box,
  Heading,
  Text,
  Input,
  Button,
  Spacer,
  Image,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const SearchResults = ({ data }) => {
  const [search, setSearch] = useState("");
  const [filteredCard, setFilteredCard] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const [clickedCoin, setClickedCoin] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const getCoin = (search) => {
    const filtered = data.filter((coin) => {
      return coin.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredCard(filtered);
    setShowResults(true);
  };
  console.log(clickedCoin);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (coin) => {};

  return (
    // SEARCH BOX
    <Flex w="100%" height="30vh" direction="column" justify="flex-start">
      <Search handleChange={handleChange} getCoin={getCoin} search={search} />

      {/* SEARCH RESULTS */}
      {showResults && (
        <Flex justify="center" w="100%" h="100vh" bg="brand.100">
          <Box
            m={0}
            minW="70vh"
            w="auto"
            h="30vh"
            bg="brand.200"
            borderRadius={10}
            p={15}
          >
            <Flex
              justify="space-around"
              align="center"
              borderRadius={10}
              direction="column"
              h="100%"
              w="100%"
            >
              <Heading as="h3" textAlign="center" mt={20} mb={10}>
                Search Results
              </Heading>

              <Box bg="brand.200" w="100%" h="100%">
                <Flex justify="space-around" align="center">
                  {filteredCard.map((coin) => {
                    return (
                      <Flex
                        align="center"
                        w="60%"
                        border="2px solid gray"
                        borderRadius={5}
                        m="10px"
                        mb={10}
                        minH="15vh"
                        as="button"
                        onClick={() => {
                          setClickedCoin(coin);
                          onOpen();
                        }}
                        _hover={{ bg: "brand.300" }}
                        _active={{ bg: "brand.400", transform: "scale(0.95)" }}
                      >
                        <Box>
                          <Image
                            boxSize="9rem"
                            src={coin.image}
                            alt={coin.name}
                            p={2}
                          />
                        </Box>
                        <Box w="20%" h="20%">
                          <Flex>
                            <Heading
                              color="brand.800"
                              as="h3"
                              fontSize="1.3rem"
                              p={5}
                              fontWeight="500"
                              lineHeight={1.5}
                            >
                              {coin.name}
                            </Heading>
                          </Flex>
                        </Box>
                      </Flex>
                    );
                  })}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      )}

      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{clickedCoin.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" justify="center" align="center">
              <Box borderBottom="4px solid gray" pb={6}>
                <Flex align="center">
                  <Image
                    boxSize="9rem"
                    src={clickedCoin.image}
                    alt={clickedCoin.name}
                    p={2}
                  />
                  <Heading as="h3" fontSize="1.8rem" p={5} fontWeight="700">
                    {clickedCoin.symbol}
                  </Heading>
                </Flex>
              </Box>
              <Box p={10}>
                <Text>Price: {clickedCoin.current_price}</Text>
                <Text>Market Cap: {clickedCoin.market_cap}</Text>
                <Text>Market Cap Rank: {clickedCoin.market_cap_rank}</Text>
                <Text>High 24h: {clickedCoin.high_24h}</Text>
                <Text>Low 24h: {clickedCoin.low_24h}</Text>
                <Text>Price Change 24h: {clickedCoin.price_change_24h}</Text>
                <Text>
                  Price Change Percentage 24h:{" "}
                  {clickedCoin.price_change_percentage_24h}
                </Text>
                <Text>
                  Market Cap Change 24h: {clickedCoin.market_cap_change_24h}
                </Text>
                <Text>
                  Market Cap Change Percentage 24h:{" "}
                  {clickedCoin.market_cap_change_percentage_24h}
                </Text>
                <Text>
                  Circulating Supply: {clickedCoin.circulating_supply}
                </Text>
                <Text>Total Supply: {clickedCoin.total_supply}</Text>
                <Text>Max Supply: {clickedCoin.max_supply}</Text>
                <Text>
                  Price Change Percentage 7d:{" "}
                  {clickedCoin.price_change_percentage_7d}
                </Text>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SearchResults;
