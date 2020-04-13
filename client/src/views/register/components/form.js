import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { postUserAction } from "actions/user-action";
import { Col, Row } from "components/layout";
import { fieldValidation } from "helpers/field-validation";
import { Para } from "components/typography";
import { StyledButton } from "components/button";
import { FormWrapper, Label, InputWrapper } from "./style";

const Form = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
          props.postData(res.data.user);
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.response.data.replace("User validation failed: ", "").split(", "));
      });
  };

  const submitData = async e => {
    e.preventDefault();
    setIsLoading(true);
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
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </Col>
        <Col gap="6px" width="50%">
          <Label htmlFor="lastName__signup">Last name</Label>
          <InputWrapper
            id="lastName__signup"
            type="text"
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Col>
      </Row>
      <div>
        <Label htmlFor="email__signup">Email address</Label>
        <InputWrapper
          id="email__signup"
          type="email"
          required
          color={fieldValidation(error, "email") && "danger"}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {fieldValidation(error, "email") && (
          <Para size="sm" weight="medium" color="danger">
            {fieldValidation(error, "email")}
          </Para>
        )}
      </div>
      <div>
        <Label htmlFor="password__signup">Password</Label>
        <InputWrapper
          id="password__signup"
          type="password"
          required
          color={fieldValidation(error, "password") && "danger"}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {fieldValidation(error, "password") && (
          <Para size="sm" weight="medium" color="danger">
            {fieldValidation(error, "password")}
          </Para>
        )}
      </div>
      <div>
        <StyledButton type="primary" block disabled={isLoading}>
          {isLoading ? "Creating an account..." : "Create an account"}
        </StyledButton>
      </div>
    </FormWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    postData: userData => dispatch(postUserAction(userData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
