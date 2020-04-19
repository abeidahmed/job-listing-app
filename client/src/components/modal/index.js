import React, { useRef } from "react";
import { useOnClickOutside } from "utils/outside-click-hook";
import { ModalWrapper, ModalInner, ModalChild } from "./style";

const Modal = ({ isActive, onOutsideClick, children }) => {
  const ref = useRef();

  useOnClickOutside(ref, onOutsideClick);

  return (
    <ModalWrapper isActive={isActive}>
      <ModalInner>
        <ModalChild ref={ref}>{children}</ModalChild>
      </ModalInner>
    </ModalWrapper>
  );
};

export default Modal;

export { ModalTop } from "./modal-top";
export { ModalBottom } from "./modal-bottom";
