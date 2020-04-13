import React from "react";
import styled from "styled-components";
import { AvatarWithText } from "components/avatar";
import { PillWithNumber } from "components/pill";
import { Search } from "components/search";
import { StyledHeader, Nav } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <Search placeholder="Search" />
      <Nav>
        <PillWithNumber glyph="bell" number="5" />
        <AvatarWithText
          text="Jennifer"
          img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
