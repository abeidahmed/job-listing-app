import React from "react";
import { connect } from "react-redux";
import AddUserModal from "admin/views/user/user-list/components/add-modal";
import DeleteUser from "admin/views/user/user-list/components/delete-modal";

const MODAL_COMPONENTS = {
  ADD_USER: AddUserModal,
  DELETE_USER: DeleteUser
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

const mapStateToProps = state => {
  return {
    modalType: state.modalReducer.modalType,
    modalProps: state.modalReducer.modalProps
  };
};

export default connect(
  mapStateToProps,
  null
)(ModalRoot);
