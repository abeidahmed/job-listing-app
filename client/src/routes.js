import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";
import PublicRouter from "./routes/publicRouter";

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={PublicRouter} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
