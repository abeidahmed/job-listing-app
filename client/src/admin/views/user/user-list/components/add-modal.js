import React from "react";
import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";
import { Col } from "components/layout";
import { H3, Para } from "components/typography";
import { ModalTop, ModalBottom } from "components/modal";
import { InputField } from "components/field";
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

const AddModal = ({ setAddModal }) => {
  return (
    <form>
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
              <Input id="admin_add_user1" size="sm" type="text" required />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col md="30%">
              <Para size="sm">
                <label htmlFor="admin_add_user2">Last name</label>
              </Para>
            </Col>
            <Col md="70%">
              <Input id="admin_add_user2" size="sm" type="text" required />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col md="30%">
              <Para size="sm">
                <label htmlFor="admin_add_user3">Email address</label>
              </Para>
            </Col>
            <Col md="70%">
              <Input id="admin_add_user3" size="sm" type="email" required />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col md="30%">
              <Para size="sm">
                <label htmlFor="admin_add_user4">Password</label>
              </Para>
            </Col>
            <Col md="70%">
              <Input id="admin_add_user4" size="sm" type="password" required />
            </Col>
          </FormGroup>
        </FormContainer>
      </ModalTop>
      <ModalBottom>
        <Button color="primary" size="sm">
          Add user
        </Button>
        <Button color="bordered" size="sm" type="button" onClick={() => setAddModal(false)}>
          Cancel
        </Button>
      </ModalBottom>
    </form>
  );
};

export default AddModal;
