import React from "react";
import { useState, useEffect } from "react";
import { Box, Input, Flex, Heading, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Search({ data }) {
  return (
    <div>
      <Flex flexDirection="column" align="center" justify="center">
        <Heading as="h3" size="xl" mt={5} color={"gray.600"}>
          Search
        </Heading>

        <Box w="30%" p={4} color="gray.500">
          <Input
            placeholder="Search for a coin"
            size="lg"
            variant="filled"
            color="gray.500"
          />
        </Box>
      </Flex>
    </div>
  );
}

export default Search;
