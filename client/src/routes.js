import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "store";
import { fetchCurrentUser } from "actions/user-action";
import { theme, GlobalStyle } from "./theme";
import AdminRouter from "admin/routes/admin-router";
import PublicRouter from "routes/public-router";

const Routes = () => {
  useEffect(() => {
    store.dispatch(fetchCurrentUser());
  }, []);

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
