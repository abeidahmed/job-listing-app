import React, { useState } from "react";
import axios from "axios";
import { StyledButton } from "components/button";
import { FormWrapper, Label, InputWrapper, StyledPara } from "./style";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postUserData = () => {
    axios
      .post(
        "/api/v1/login",
        {
          email,
          password
        },
        { withCredentials: true }
      )
      .then(res => {
        if (res.status === 200) {
          console.log(res);
        }
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await postUserData();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email__login">Email address</Label>
        <InputWrapper id="email__login" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="password__login">Password</Label>
        <InputWrapper
          id="password__login"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
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
