import React, { useEffect, useRef } from "react";
import { DropdownWrapper, DropdownInner } from "./style";

export const Dropdown = ({ isActive, onOutsideClick, children }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onOutsideClick();
    }
  };

  return (
    <DropdownWrapper isActive={isActive} ref={wrapperRef}>
      <DropdownInner>{children}</DropdownInner>
    </DropdownWrapper>
  );
};
