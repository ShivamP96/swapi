import React from "react";

import MainContainer from "./components/MainContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MainContainer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
