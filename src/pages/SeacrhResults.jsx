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
  console.log(showResults);

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
                        m={2}
                      >
                        <Box w="10vh">
                          <Image
                            boxSize="9rem"
                            src={coin.image}
                            alt={coin.name}
                            p={2}
                          />
                        </Box>
                        <Box w="20%" h="20%">
                          <Flex>
                            <Heading as="h3" fontSize="1.3rem" p={5}>
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
    </Flex>
  );
};

export default SearchResults;
