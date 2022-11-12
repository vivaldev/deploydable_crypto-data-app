import React from "react";
import Nav from "./Nav";

import { Image, Box, Flex, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" bg="brand.400" p={4} h="16vh" w="100%">
      <Flex justify="space-around" align="flex-end">
        <Box>
          <Flex align="flex-end">
            <Image
              src="../public/analytics.png"
              alt="App logo"
              boxSize={100}
              objectFit="cover"
              m={2}
              ml="2em"
              mt={8}
            />

            <Box>
              <Flex justify="center" align="center" direction="column">
                <Heading
                  as="h1"
                  size="2xl"
                  mt={10}
                  ml={2}
                  color="whiteAlpha.700"
                >
                  Crypto Data App
                </Heading>
              </Flex>
              <Text as="p" m={3} color="blackAlpha.900" textAlign="left">
                Powered by CoinGecko API
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box>
          <Nav />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
