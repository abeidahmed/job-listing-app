import React from "react";
import { connect } from "react-redux";
import { openSidebar } from "actions/sidebar-action";
import { AvatarWithText } from "components/avatar";
import { PillWithNumber } from "components/pill";
import Icon from "components/icon";
import { Search } from "components/search";
import { StyledHeader, Nav, Wrapper, SearchWrapper } from "./style";

const Header = props => {
  return (
    <StyledHeader>
      <Wrapper>
        <button onClick={() => props.openSidebar()}>
          <Icon glyph="menu-right" />
        </button>
        <SearchWrapper>
          <Search placeholder="Search" />
        </SearchWrapper>
      </Wrapper>
      <Nav>
        <PillWithNumber glyph="bell" number="5" />
        <AvatarWithText
          text="Jennifer"
          img="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&&facepad=2.5&w=256&h=256&q=80"
        />
      </Nav>
    </StyledHeader>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    openSidebar: () => dispatch(openSidebar())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
