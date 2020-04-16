import React, { useRef } from "react";
import { useOnClickOutside } from "utils/outside-click-hook";
import { DropdownWrapper, DropdownInner } from "./style";

export const Dropdown = ({ isActive, onOutsideClick, children }) => {
  const ref = useRef();

  useOnClickOutside(ref, onOutsideClick);

  return (
    <DropdownWrapper isActive={isActive} ref={ref}>
      <DropdownInner>{children}</DropdownInner>
    </DropdownWrapper>
  );
};
