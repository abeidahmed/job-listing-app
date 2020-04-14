import React from "react";
import { connect } from "react-redux";
import { closeSidebar } from "actions/sidebar-action";
import LogoFull from "assets/logo/logo-full.svg";
import Icon from "components/icon";
import { CloseButton, HeaderWrapper } from "./style";

const Header = props => {
  return (
    <HeaderWrapper>
      <img src={LogoFull} alt="Logo-full" />
      <CloseButton iconOnlyPrimary color="iconPrimary" onClick={() => props.closeSidebar()}>
        <Icon glyph="close" />
      </CloseButton>
    </HeaderWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    closeSidebar: () => dispatch(closeSidebar())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
