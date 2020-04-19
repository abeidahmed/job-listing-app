import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { breakpoint } from "utils/breakpoint";
import { closeModal } from "actions/modal";
import { deleteUsers } from "api/user/delete-users";
import Icon from "components/icon";
import Modal from "components/modal";
import { ModalTop, ModalBottom } from "components/modal";
import { H3, Para } from "components/typography";
import { StyledButton } from "components/button";

const TopWrapper = styled.div`
  text-align: center;
  ${breakpoint.sm`
    display: flex;
    text-align: left;
  `}
`;

const ModalText = styled.div`
  margin-top: 20px;
  ${breakpoint.sm`
    margin-left: 16px;
    margin-top: 0;
  `}
`;

const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 99999px;
  background-color: ${props => props.theme.color.red300};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const StyledPara = styled(Para)`
  margin-top: 8px;
`;

const Button = styled(StyledButton)`
  display: block;
  width: 100%;
  &:not(:first-child) {
    margin-top: 12px;
  }

  ${breakpoint.sm`
    width: auto;
    &:not(:first-child) {
      margin-top: 0;
      margin-right: 16px;
    }
  `}
`;

const DeleteModal = ({ closeModal, deleteUser, modalType }) => {
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
        <Button onClick={handleDelete} size="sm" color="danger">
          Delete
        </Button>
        <Button onClick={closeModal} size="sm" color="bordered">
          Cancel
        </Button>
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
)(DeleteModal);
