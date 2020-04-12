import React from "react";
import { StyledButton } from "../../../components/button";
import { Col, Row } from "../../../components/layout";
import { FormWrapper, Label, InputWrapper } from "./style";

const Form = () => {
  return (
    <FormWrapper>
      <Row gap="6px">
        <Col gap="6px" width="50%">
          <Label htmlFor="firstName__signup">First name</Label>
          <InputWrapper id="firstName__signup" type="text" />
        </Col>
        <Col gap="6px" width="50%">
          <Label htmlFor="lastName__signup">Last name</Label>
          <InputWrapper id="lastName__signup" type="text" />
        </Col>
      </Row>
      <div>
        <Label htmlFor="email__signup">Email address</Label>
        <InputWrapper id="email__signup" type="email" />
      </div>
      <div>
        <Label htmlFor="password__signup">Password</Label>
        <InputWrapper id="password__signup" type="password" />
      </div>
      <div>
        <StyledButton type="primary" block>
          Create an account
        </StyledButton>
      </div>
    </FormWrapper>
  );
};

export default Form;
