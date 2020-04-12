import React from "react";
import Form from "./components/form";
import Header from "./components/header";
import SocialButton from "./components/socialButton";
import { Span } from "components/typography";
import { Main, Inner, LoginWrapper, Divider, Section } from "./style";

const Login = () => {
  return (
    <Main>
      <Inner>
        <LoginWrapper>
          <Header />
          <Section>
            <Form />
            <Divider>
              <Span color="gray-lightest">or continue with</Span>
            </Divider>
            <SocialButton />
          </Section>
        </LoginWrapper>
      </Inner>
    </Main>
  );
};

export default Login;
