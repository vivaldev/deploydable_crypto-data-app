import React, { useState, useContext } from "react";
import { Box, Flex, Heading, Text, Input, Button } from "@chakra-ui/react";

function LoginUser({ toggleRegisterUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loggingIn() {
    console.log(username, password);
  }

  return (
    <Box>
      <Flex w="100%" h="100vh" justify="center" mt="10vh">
        <Box bg="brand.400" w="26vw" maxW="26vw" h="40vh" borderRadius={10}>
          <Flex
            justify="center"
            align="center"
            w="256w"
            h="40vh"
            direction="column"
          >
            <Heading as="h3" size="lg" color="whiteAlpha.800">
              Login
            </Heading>
            <Flex maxW="24vw" h="28vh" m={5} bg="brand.200">
              <Box borderRadius={10} p={5}>
                <Flex direction="column" h="10vh" w="20vw">
                  <Text
                    fontFamily="Karla"
                    fontSize="1.3rem"
                    fontWeight={500}
                    mt="5"
                    color="brand.800"
                  >
                    Username:
                  </Text>
                  <Input
                    bg="brand.50"
                    placeholder="Username"
                    w="100%"
                    mt={2}
                    p={5}
                    fontSize="1.2rem"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Flex>
                <Flex direction="column">
                  <Text
                    fontSize="1.3rem"
                    fontWeight={500}
                    mt="5"
                    color="brand.800"
                  >
                    Password:
                  </Text>
                  <Input
                    bg="brand.50"
                    placeholder="Password"
                    w="100%"
                    mt={2}
                    p={5}
                    fontSize="1.2rem"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    bg="brand.500"
                    type="submit"
                    color="brand.50"
                    fontSize="1.2rem"
                    mt={5}
                    onClick={() => {
                      loggingIn();
                      toggleRegisterUser();
                    }}
                  >
                    Login
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default LoginUser;
