import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Dashboard from "admin/views/dashboard";
import Header from "admin/views/header";
import Sidebar from "admin/views/sidebar";

const Wrapper = styled.div`
  display: flex;
`;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AdminRouter = () => {
  return (
    <Wrapper>
      <Sidebar />
      <PageWrapper>
        <Header />
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
        </Switch>
      </PageWrapper>
    </Wrapper>
  );
};

export default AdminRouter;
