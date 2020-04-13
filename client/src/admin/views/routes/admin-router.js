import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "admin/views/dashboard";

const AdminRouter = () => {
  return (
    <Switch>
      <Route exact path="/admin" component={Dashboard} />
    </Switch>
  );
};

export default AdminRouter;
