import React from "react";
import { StyledButton } from "components/button";
import { FormWrapper, Label, InputWrapper, StyledPara } from "./style";

const Form = () => {
  return (
    <FormWrapper>
      <div>
        <Label htmlFor="email__login">Email address</Label>
        <InputWrapper id="email__login" type="email" />
      </div>
      <div>
        <Label htmlFor="password__login">Password</Label>
        <InputWrapper id="password__login" type="password" />
      </div>
      <div>
        <StyledPara size="sm">
          <a href="/">Forgot your password?</a>
        </StyledPara>
      </div>
      <div>
        <StyledButton type="primary" block>
          Sign in
        </StyledButton>
      </div>
    </FormWrapper>
  );
};

export default Form;
