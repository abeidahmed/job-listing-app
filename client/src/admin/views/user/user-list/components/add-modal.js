import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { breakpoint } from "utils/breakpoint";
import { createUserByAdmin } from "api/user";
import { closeModal } from "actions/modal";
import { Col } from "components/layout";
import { H3, Para } from "components/typography";
import Modal from "components/modal";
import { ModalTop, ModalBottom } from "components/modal";
import { InputField, StyledSelect } from "components/field";
import { setFirstName, setLastName, setEmail, setRole, setPassword } from "actions/create-user";
import { StyledButton } from "components/button";

const FormContainer = styled.div`
  margin-top: 24px;
  > div:not(:first-child) {
    margin-top: 20px;
  }
`;

const FormGroup = styled.div`
  ${breakpoint.md`
    display: flex;
  `}
`;

const Input = styled(InputField)`
  margin-top: 4px;
  ${breakpoint.md`
    margin-top: 0;
  `}
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

const AddUserModal = ({
  closeModal,
  modalType,
  firstName,
  lastName,
  email,
  role,
  password,
  sendFirstName,
  sendLastName,
  sendEmail,
  sendRole,
  sendPassword,
  postUser
}) => {
  const handleSubmit = async e => {
    e.preventDefault();
    await postUser();
  };

  return (
    <Modal onOutsideClick={closeModal} isActive={modalType === "ADD_USER"}>
      <form onSubmit={handleSubmit}>
        <ModalTop>
          <H3 color="dark" weight="medium">
            Add user
          </H3>
          <FormContainer>
            <FormGroup>
              <Col md="30%">
                <Para size="sm">
                  <label htmlFor="admin_add_user1">First name</label>
                </Para>
              </Col>
              <Col md="70%">
                <Input
                  id="admin_add_user1"
                  size="sm"
                  type="text"
                  required
                  value={firstName}
                  onChange={e => sendFirstName(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col md="30%">
                <Para size="sm">
                  <label htmlFor="admin_add_user2">Last name</label>
                </Para>
              </Col>
              <Col md="70%">
                <Input
                  id="admin_add_user2"
                  size="sm"
                  type="text"
                  required
                  value={lastName}
                  onChange={e => sendLastName(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col md="30%">
                <Para size="sm">
                  <label htmlFor="admin_add_user3">Email address</label>
                </Para>
              </Col>
              <Col md="70%">
                <Input
                  id="admin_add_user3"
                  size="sm"
                  type="email"
                  required
                  value={email}
                  onChange={e => sendEmail(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col md="30%">
                <Para size="sm">
                  <label htmlFor="admin_add_user5">Role</label>
                </Para>
              </Col>
              <Col md="70%">
                <StyledSelect
                  size="sm"
                  id="admin_add_user5"
                  value={role}
                  onChange={e => sendRole(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Employer">Employer</option>
                  <option value="User">User</option>
                </StyledSelect>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col md="30%">
                <Para size="sm">
                  <label htmlFor="admin_add_user4">Password</label>
                </Para>
              </Col>
              <Col md="70%">
                <Input
                  id="admin_add_user4"
                  size="sm"
                  type="password"
                  required
                  value={password}
                  onChange={e => sendPassword(e.target.value)}
                />
              </Col>
            </FormGroup>
          </FormContainer>
        </ModalTop>
        <ModalBottom>
          <Button color="primary" size="sm">
            Add user
          </Button>
          <Button color="bordered" size="sm" type="button" onClick={closeModal}>
            Cancel
          </Button>
        </ModalBottom>
      </form>
    </Modal>
  );
};

const mapStateToProps = state => {
  const { firstName, lastName, email, role, password } = state.createUser;
  return {
    modalType: state.modalReducer.modalType,
    firstName,
    lastName,
    email,
    role,
    password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    postUser: () => dispatch(createUserByAdmin()),
    sendFirstName: value => dispatch(setFirstName(value)),
    sendLastName: value => dispatch(setLastName(value)),
    sendEmail: value => dispatch(setEmail(value)),
    sendRole: value => dispatch(setRole(value)),
    sendPassword: value => dispatch(setPassword(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserModal);
