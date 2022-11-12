import React, { useState } from "react";
import { Flex, Box, Text, Heading, Input, Button } from "@chakra-ui/react";

function Search({ handleChange, getCoin, search }) {
  return (
    <div>
      <Flex justify="center" w="100%"  bg="brand.100">
        <Box m={10} w="50%" minH="30vh" bg="brand.200" borderRadius={10}>
          <Flex justify="center" align="center" h="100%">
            <Box w="80%">
              <Heading color="brand.800" as="h4" p={3} textAlign="center">
                Search for a coin
              </Heading>
              <Input
                type="text"
                placeholder="Search for a coin"
                onChange={handleChange}
                value={search}
                bg="brand.100"
                mt={3}
                fontSize="xl"
                p={5}
              />
              <Flex mt={3} w="100%" justify="flex-end">
                <Button
                  p={6}
                  m={3}
                  color="brand.900"
                  fontSize="xl"
                  onClick={() => {
                    getCoin(search);
                  }}
                >
                  Search
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default Search;
