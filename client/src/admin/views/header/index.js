import React, { useState } from "react";
import { connect } from "react-redux";
import { openSidebar } from "actions/sidebar-action";
import { AvatarWithText } from "components/avatar";
import { Dropdown } from "components/dropdown";
import { H1 } from "components/typography";
import { PillWithNumber } from "components/pill";
import Icon from "components/icon";
import UserDropdown from "./components/profile-dropdown";
import { OpenButton, StyledHeader, Nav, Wrapper, HeadTextWrapper, UserAction } from "./style";

const Header = props => {
  const [isActive, setIsActive] = useState(false);
  return (
    <StyledHeader>
      <Wrapper>
        <OpenButton iconOnlyPrimary color="iconPrimary" onClick={() => props.openSidebar()}>
          <Icon glyph="menu-left" color="#374151" />
        </OpenButton>
        <HeadTextWrapper>
          <H1 color="dark" size="lg">
            {props.pageHeader}
          </H1>
        </HeadTextWrapper>
      </Wrapper>
      <Nav>
        <PillWithNumber glyph="bell" number="5" />
        <UserAction>
          <AvatarWithText
            onClick={() => setIsActive(true)}
            text="Jennifer"
            img="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&&facepad=2.5&w=256&h=256&q=80"
          />
          <Dropdown isActive={isActive} onOutsideClick={() => setIsActive(false)}>
            <UserDropdown />
          </Dropdown>
        </UserAction>
      </Nav>
    </StyledHeader>
  );
};

const mapStateToProps = state => {
  return {
    pageHeader: state.pageHeadReducer.pageHead
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSidebar: () => dispatch(openSidebar())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
