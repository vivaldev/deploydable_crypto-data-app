import React, { useState } from "react";
import RegisterUser from "../features/RegisterUser";
import LoginUser from "../features/LoginUser";

import {
  Heading,
  Text,
  Box,
  Flex,
  Button,
  Stack,
  Input,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

function Home({ data }) {
  const [registerUser, setRegisterUser] = useState(false);
  const [loginUser, setLoginUser] = useState(false);

  return (
    <Box>
      <Flex w="100%" h="100vh" justify="center">
        {/* LOGIN NOTICE BOX */}
        {!registerUser && !loginUser && (
          <Box bg="brand.200" w="40%" h="30vh" p="5" borderRadius="md" mt={40}>
            <Flex
              justify="center"
              align="center"
              w="100%"
              h="30vh"
              direction="column"
            >
              <Heading as="h3" size="lg">
                You haven't signed in yet.
              </Heading>
              <Text fontSize="lg" mt="5">
                Please Login or Register User
              </Text>
              <Flex mt={10} justify="space-between" w="65%">
                <Button
                  bg="brand.100"
                  p={5}
                  fontSize="lg"
                  onClick={() => setLoginUser(true)}
                >
                  Login
                </Button>
                <Button
                  onClick={() => setRegisterUser((prev) => !prev)}
                  bg="brand.100"
                  p={5}
                  fontSize="lg"
                >
                  Register user
                </Button>
              </Flex>
            </Flex>
          </Box>
        )}

        {/* NOTICE BOX ENDS */}

        {/* REGISTER USER DRAWER */}
        {registerUser && <RegisterUser />}
        {loginUser && <LoginUser />}
      </Flex>
    </Box>
  );
}

export default Home;
