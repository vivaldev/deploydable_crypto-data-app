import React from "react";

import {
  Heading,
  Text,
  Box,
  Flex,
  Button,
  Stack,
  Drawer,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function Home({ data }) {
  return (
    <div>
      <Heading as="h3" size="lg" color="brand.800" fontFamily="Karla">
        {" "}
        Home
      </Heading>
    </div>
  );
}

export default Home;
