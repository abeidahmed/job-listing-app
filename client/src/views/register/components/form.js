import React from "react";
import { StyledButton } from "../../../components/button";
import { FormWrapper, FormRow, Label, InputWrapper } from "./style";

const Form = () => {
  return (
    <FormWrapper>
      <FormRow>
        <div>
          <Label htmlFor="firstName__signup">First name</Label>
          <InputWrapper id="firstName__signup" type="text" />
        </div>
        <div>
          <Label htmlFor="lastName__signup">Last name</Label>
          <InputWrapper id="lastName__signup" type="text" />
        </div>
      </FormRow>
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
