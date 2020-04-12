import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  background-color: ${props => props.theme.color.gray50};
`;

export const Inner = styled.div`
  max-width: 476px;
  margin-left: auto;
  margin-right: auto;
`;

export const LoginWrapper = styled.div`
  padding: 60px 24px;
`;

export const Section = styled.section`
  margin-top: 32px;
  background-color: white;
  padding: 32px 40px;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadow.small};
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid ${props => props.theme.color.gray200};
  }

  &::before {
    margin-right: 16px;
  }

  &::after {
    margin-left: 16px;
  }
`;
