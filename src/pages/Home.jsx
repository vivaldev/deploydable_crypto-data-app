import React from "react";
import { Heading, Text, Box, Flex, Button, Stack } from "@chakra-ui/react";

function Home({ data }) {
  function getData() {
    console.log(data);
  }

  return (
    <div>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh"
        bg="brand.100"
      >
        <Box bg="white" p={8} rounded="lg" shadow="lg" maxW="500px" w="full">
          <Heading as="h1" size="xl" textAlign="center">
            Welcome to the Home Page
          </Heading>
          <Text mt={4} textAlign="center">
            This is the home page of the app.
          </Text>
          <Stack
            mt={6}
            direction="row"
            spacing={4}
            align="center"
            justify="center"
          >
            <Button colorScheme="blue" variant="outline">
              Login
            </Button>
            <Button colorScheme="blue">Sign Up</Button>
          </Stack>
        </Box>
        <Box bg="white" p={8} rounded="lg" shadow="lg" maxW="500px" w="full">
          <Button onClick={getData} colorScheme="black" variant="outline">
            Get data
          </Button>
        </Box>
      </Flex>
    </div>
  );
}

export default Home;
