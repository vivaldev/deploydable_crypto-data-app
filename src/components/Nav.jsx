import React from "react";
import {
  Box,
  Flex,
  HStack,
  Breadcrumb,
  BreadcrumbSeparator,
  BreadcrumbItem,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box p={2} fontSize={26} color="whiteAlpha.900">
      <Flex>
        <HStack spacing={8} align="center" justify="center" m={4}>
          <Breadcrumb separator="-">
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link href="/top100">Top 100</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link href="/search">Search</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link href="/coins">Coins</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Nav;
