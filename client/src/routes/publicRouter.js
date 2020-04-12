import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "views/home";
import Register from "views/register";

const PublicRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_up" component={Register} />
    </Switch>
  );
};

export default PublicRouter;
