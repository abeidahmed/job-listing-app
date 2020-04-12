import React from "react";
import { Col } from "components/layout";
import { Span } from "components/typography";
import Form from "./components/form";
import Header from "./components/header";
import RightContent from "./components/rightContent";
import SocialButton from "./components/socialButton";
import { Main, LeftInner, Divider } from "./style";

const Register = () => {
  return (
    <Main>
      <Col width="100%" lg="40%">
        <LeftInner>
          <Header />
          <SocialButton />
          <Divider>
            <Span color="gray-lightest">or continue with</Span>
          </Divider>
          <Form />
        </LeftInner>
      </Col>
      <RightContent />
    </Main>
  );
};

export default Register;
