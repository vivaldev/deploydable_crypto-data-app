import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Karla",
  },
  colors: {
    brand: {
      50: "#e8f0ff",
      100: "#cad4e8",
      200: "#abb9d4",
      300: "#8c9fc0",
      400: "#6c87ac",
      500: "#536993",
      600: "#3f4e73",
      700: "#2c3554",
      800: "#191d35",
      900: "#020519",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box h="auto" bg="brand.100">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
