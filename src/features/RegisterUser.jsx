import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Divider,
  Center,
} from "@chakra-ui/react";
import { Flex, Box, Heading } from "@chakra-ui/react";

function RegisterUser() {
  const [loginTabSelected, setLoginTabSelected] = useState(true);
  const [registerTabSelected, setRegisterTabSelected] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  function isSelectedHandler() {
    setLoginTabSelected(!loginTabSelected);
    setRegisterTabSelected(!registerTabSelected);
  }

  return (
    <Box>
      <Flex w="100%" h="100vh" justify="center" mt="10vh">
        <Box bg="brand.400" w="35vw" h="40vh" borderRadius={5}>
          <Flex
            justify="center"
            align="center"
            w="256w"
            h="40vh"
            direction="column"
          >
            <Box w="100%">
              <Flex justify="space-around">
                <Box
                  w="100%"
                  as="button"
                  id="login"
                  onClick={isSelectedHandler}
                  aria-selected="true"
                  bg={loginTabSelected ? "brand.500" : "brand.300"}
                  border="3px solid rgb(170, 185, 211) "
                >
                  <Heading
                    p={2}
                    fontFamily="Roboto"
                    as="h3"
                    size="lg"
                    color="brand.50"
                  >
                    Login
                  </Heading>
                </Box>

                <Center height="120px">
                  <Divider orientation="vertical" />
                </Center>

                <Box
                  w="100%"
                  as="button"
                  id="register"
                  aria-selected="false"
                  onClick={isSelectedHandler}
                  bg={registerTabSelected ? "brand.500" : "brand.300"}
                  border="3px solid rgb(170, 185, 211)"
                >
                  {" "}
                  <Heading
                    p={2}
                    fontFamily="Roboto"
                    as="h3"
                    size="lg"
                    color="brand.50"
                  >
                    Register
                  </Heading>
                </Box>
              </Flex>
            </Box>

            <Box mb={2} bg="brand.200" w="80%" h="80%" borderRadius={5}>
              <Flex>
                <Box p={5}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl id="username" isRequired>
                      <FormLabel htmlFor="username">Username: </FormLabel>
                      <Input
                        type="text"
                        id="username"
                        placeholder="Username"
                        {...register("username", {
                          required: true,
                          minLength: 4,
                          pattern: /[A-Za-z0-9]{4}/,
                        })}
                      />
                      <FormErrorMessage>
                        {errors.username && "Username is required"}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel htmlFor="password">Password: </FormLabel>
                      <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        {...register("password", {
                          required: true,
                          minLength: 8,
                          maxLength: 20,
                        })}
                      />
                      <FormErrorMessage>
                        {errors.password && "Password is required"}
                      </FormErrorMessage>
                    </FormControl>
                    <Button
                      mt={4}
                      colorScheme="teal"
                      isLoading={isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default RegisterUser;
