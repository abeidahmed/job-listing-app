import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";

// test
import { H1, H2, H3 } from "./components/typography";
import { StyledButton } from "./components/button";
import Icon from "./components/icon";
import { InputField } from "./components/field";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <H1 color="dark" size="2xl">
          Hello world
        </H1>
        <H2 color="gray" size="xl">
          Hello world
        </H2>
        <H3 color="light" size="lg">
          Hello world
        </H3>
        <br />
        <br />
        <br />
        <StyledButton type="primary" size="sm" icon>
          <Icon color="red" glyph="briefcase" height="16" width="16" />
          hello worlds
        </StyledButton>
        <br />
        <br />
        <div style={{ display: "flex" }}>
          <StyledButton type="bordered" icon>
            <Icon color="red" glyph="dollar" height="20" width="20" />
            Button
          </StyledButton>
          <InputField type="primary" placeholder="Search..." />
        </div>
        <StyledButton type="bordered" iconOnly>
          <Icon color="red" glyph="dollar" height="20" width="20" />
        </StyledButton>
        <div style={{ display: "flex" }}>
          <StyledButton type="bordered" size="sm" isLink>
            <a href="https://google.com">hello world</a>
          </StyledButton>
          <InputField size="sm" type="danger" placeholder="Search..." />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
