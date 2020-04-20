import React from "react";
import { connect } from "react-redux";
import { closeModal } from "actions/modal";
import { deleteUsers } from "api/user/delete-users";
import Icon from "components/icon";
import Modal from "components/modal";
import { ModalTop, ModalBottom } from "components/modal";
import { H3 } from "components/typography";
import { TopWrapper, ModalText, IconWrapper, StyledPara, DeleteButton } from "./style";

const DeleteUser = ({ closeModal, deleteUser, modalType }) => {
  const handleDelete = async () => {
    await deleteUser();
    closeModal();
  };

  return (
    <Modal onOutsideClick={closeModal} isActive={modalType === "DELETE_USER"}>
      <ModalTop>
        <TopWrapper>
          <IconWrapper>
            <Icon glyph="alert" color="#E53E3E" />
          </IconWrapper>
          <ModalText>
            <H3 color="dark" weight="medium">
              Delete user
            </H3>
            <StyledPara color="gray">
              Are you sure you want to delete this user? Once you click on delete this action cannot
              be undone.
            </StyledPara>
          </ModalText>
        </TopWrapper>
      </ModalTop>
      <ModalBottom>
        <DeleteButton onClick={handleDelete} size="sm" color="danger">
          Delete
        </DeleteButton>
        <DeleteButton onClick={closeModal} size="sm" color="bordered">
          Cancel
        </DeleteButton>
      </ModalBottom>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    modalType: state.modalReducer.modalType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deleteUser: () => dispatch(deleteUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteUser);
