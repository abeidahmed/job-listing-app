import React, { useState } from "react";
import axios from "axios";
import { StyledButton } from "components/button";
import { Col, Row } from "components/layout";
import { FormWrapper, Label, InputWrapper } from "./style";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postUserData = () => {
    axios
      .post(
        "/api/v1/signup",
        {
          firstName,
          lastName,
          email,
          password
        },
        { withCredentials: true }
      )
      .then(res => {
        if (res.status === 201) {
          console.log(res.data.user);
        }
      })
      .catch(err => console.log(err));
  };

  const submitData = async e => {
    e.preventDefault();
    await postUserData();
  };

  return (
    <FormWrapper onSubmit={submitData}>
      <Row gap="6px">
        <Col gap="6px" width="50%">
          <Label htmlFor="firstName__signup">First name</Label>
          <InputWrapper
            id="firstName__signup"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </Col>
        <Col gap="6px" width="50%">
          <Label htmlFor="lastName__signup">Last name</Label>
          <InputWrapper
            id="lastName__signup"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Col>
      </Row>
      <div>
        <Label htmlFor="email__signup">Email address</Label>
        <InputWrapper id="email__signup" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="password__signup">Password</Label>
        <InputWrapper
          id="password__signup"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
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
