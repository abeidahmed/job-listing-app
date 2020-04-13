import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "store";
import { theme, GlobalStyle } from "./theme";
import AdminRouter from "admin/views/routes/admin-router";
import PublicRouter from "routes/publicRouter";

const Routes = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/admin" component={AdminRouter} />
            <Route path="/" component={PublicRouter} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default Routes;
