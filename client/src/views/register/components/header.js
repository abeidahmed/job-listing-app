import React from "react";
import { H1, Para } from "../../../components/typography";
import { StyledSpan } from "./style";

const Header = () => {
  return (
    <header>
      <H1 size="2xl" weight="bold" color="dark">
        Create an account
      </H1>
      <Para size="sm" color="gray">
        and <StyledSpan>start your 14-day trial</StyledSpan>
      </Para>
    </header>
  );
};

export default Header;
