import React from "react";
import LogoFull from "assets/logo/logo-full.svg";
import { HeaderWrapper } from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={LogoFull} alt="Logo-full" />
    </HeaderWrapper>
  );
};

export default Header;
