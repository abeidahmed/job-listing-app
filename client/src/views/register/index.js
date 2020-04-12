import React from "react";
import { Span } from "components/typography";
import Form from "./components/form";
import Header from "./components/header";
import RightContent from "./components/rightContent";
import SocialButton from "./components/socialButton";
import { Main, LeftSide, LeftInner, Divider } from "./style";

const Register = () => {
  return (
    <Main>
      <LeftSide>
        <LeftInner>
          <Header />
          <SocialButton />
          <Divider>
            <Span color="gray-lightest">or continue with</Span>
          </Divider>
          <Form />
        </LeftInner>
      </LeftSide>
      <RightContent />
    </Main>
  );
};

export default Register;
