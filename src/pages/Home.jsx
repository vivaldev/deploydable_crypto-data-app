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

  return <Box>Home</Box>;
}

export default Home;
