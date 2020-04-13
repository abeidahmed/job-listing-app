import React, { useState } from "react";
import axios from "axios";
import { Para } from "components/typography";
import { StyledButton } from "components/button";
import { FormWrapper, Label, InputWrapper, StyledPara } from "./style";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
          setIsLoading(false);
          console.log(res);
        }
      })
      .catch(err => {
        setError(err.response.data);
        setIsLoading(false);
      });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await postUserData();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email__login">Email address</Label>
        <InputWrapper
          id="email__login"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password__login">Password</Label>
        <InputWrapper
          id="password__login"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <StyledPara size="sm">
          <a href="/">Forgot your password?</a>
        </StyledPara>
      </div>
      {error.length > 0 && (
        <Para size="sm" weight="medium" color="danger">
          {error}
        </Para>
      )}
      <div>
        <StyledButton type="primary" block disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign in"}
        </StyledButton>
      </div>
    </FormWrapper>
  );
};

export default Form;
