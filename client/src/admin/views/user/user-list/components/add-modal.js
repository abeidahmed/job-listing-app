import React from "react";
import { connect } from "react-redux";
import { createUserByAdmin } from "api/user";
import { closeModal } from "actions/modal";
import { Col } from "components/layout";
import { H3, Para } from "components/typography";
import Modal from "components/modal";
import { ModalTop, ModalBottom } from "components/modal";
import { StyledSelect } from "components/field";
import { setUserData } from "actions/create-user";
import { FormContainer, FormGroup, Input, Button } from "./style";

const AddUserModal = ({
  closeModal,
  modalType,
  firstName,
  lastName,
  email,
  role,
  password,
  postUser,
  setValue
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
                  onChange={e => setValue("firstName", e.target.value)}
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
                  onChange={e => setValue("lastName", e.target.value)}
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
                  onChange={e => setValue("email", e.target.value)}
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
                  onChange={e => setValue("role", e.target.value)}
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
                  onChange={e => setValue("password", e.target.value)}
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
    setValue: (field, value) => dispatch(setUserData(field, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserModal);
