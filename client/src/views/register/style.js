import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";

export const Main = styled.main`
  height: 100vh;
  display: flex;
  width: 100%;
`;

export const LeftInner = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 396px;
  margin-top: 60px;
  ${breakpoint.lg`
    padding-right: 80px;
    margin-left: auto;
  `}
  ${breakpoint.xl`
    padding-right: 130px;
  `}
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
