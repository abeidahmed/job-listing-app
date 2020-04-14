import React from "react";
import { connect } from "react-redux";
import Links from "./components/links";
import Header from "./components/header";
import { Main } from "./style";

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
