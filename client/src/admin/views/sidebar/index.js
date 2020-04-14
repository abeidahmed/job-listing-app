import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Links from "./components/links";
import Header from "./components/header";

const Main = styled.aside`
  max-width: 230px;
  width: 100%;
  height: 100vh;
  padding: 0 24px;
  background-color: white;
  border-right: 1px solid ${props => props.theme.color.gray200};
  @media (max-width: 991.98px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    transition: 150ms all ease-in-out;
    transform: ${props => (props.isActive ? "translateX(0)" : "translateX(-100%)")};
  }
`;

const Sidebar = props => {
  return (
    <Main isActive={props.sidebarStatus}>
      <Header />
      <Links />
    </Main>
  );
};

const mapStateToProps = state => {
  return {
    sidebarStatus: state.sidebarReducer.isActive
  };
};

export default connect(
  mapStateToProps,
  null
)(Sidebar);
