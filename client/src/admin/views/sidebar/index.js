import React from "react";
import styled from "styled-components";
import Links from "./components/links";
import Header from "./components/header";

const Main = styled.main`
  max-width: 230px;
  width: 100%;
  height: 100vh;
  padding: 0 24px;
  border-right: 1px solid ${props => props.theme.color.gray200};
`;

const Sidebar = () => {
  return (
    <Main>
      <Header />
      <Links />
    </Main>
  );
};

export default Sidebar;
