import React from "react";
import {
  Image,
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  Button,
  ButtonGroup,
  HStack,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";

const Nav = () => {
  return (
    <HStack spacing={4} m={2}>
      <Button
        as={Link}
        to="/"
        colorScheme="teal"
        variant="outline"
        color="teal.900"
        _hover={{ bg: "teal.900", color: "white" }} // hover color
        _active={{ bg: "teal.900", color: "white" }} // active color
      >
        Home
      </Button>
      <Button as="a" href="/charts" colorScheme="blue" variant="outline">
        Charts
      </Button>
      <Button as="a" href="/search" colorScheme="blue" variant="outline">
        Search
      </Button>
    </HStack>
  );
};

const Header = () => {
  return (
    <Box as="header" bg="gray.200" p={4}>
      <Flex align="center">
        <Image
          src="../public/analytics.png"
          alt="App logo"
          boxSize={100}
          objectFit="cover"
          m={2}
        />
        <Box>
          <Heading as="h1" size="2xl" ml={2} color={"gray.600"}>
            Crypto Data App
          </Heading>
          <Text as="p" ml={3} color={"teal.900"}>
            Powered by CoinGecko
          </Text>
        </Box>

        <Spacer />
        <Box>
          <Nav />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
