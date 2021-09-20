import React from "react";
import theme from "../src/components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Trip from "../src/components/Trip";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Trip />
    </ThemeProvider>
  );
};

export default App;
