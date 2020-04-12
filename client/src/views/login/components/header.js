import React from "react";
import { H1, Para } from "components/typography";
import { StyledHeader, StyledSpan } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <H1 size="2xl" weight="bold" color="dark">
        Sign in to your account
      </H1>
      <Para size="sm" color="gray">
        and <StyledSpan>start your 14-day trial</StyledSpan>
      </Para>
    </StyledHeader>
  );
};

export default Header;
