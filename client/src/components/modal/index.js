import React, { useRef } from "react";
import { connect } from "react-redux";
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

const mapStateToProps = state => {
  return {
    isActive: state.modalReducer.isActive
  };
};

export default connect(
  mapStateToProps,
  null
)(Modal);

export { ModalTop } from "./modal-top";
export { ModalBottom } from "./modal-bottom";
