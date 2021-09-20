import React from "react";
import theme from "../src/components/Theme";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import Trip from "../src/components/Trip";

const App = () => {
  return (
    <>
      <Head>
        <title>Sydney and Franklin</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Trip />
      </ThemeProvider>
    </>
  );
};

export default App;
