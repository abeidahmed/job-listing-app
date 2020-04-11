import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";

// test
import { H1, H2, H3 } from "./components/typography";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <H1 size="md">Hello world</H1>
        <H2 size="sm">Hello world</H2>
        <H3>Hello world</H3>
      </div>
    </ThemeProvider>
  );
}

export default App;
