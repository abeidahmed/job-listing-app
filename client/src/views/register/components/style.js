import styled from "styled-components";
import BgImage from "./building.jpg";
import { breakpoint } from "utils/breakpoint";
import { Col } from "components/layout";
import { InputField } from "components/field";

// header
export const StyledSpan = styled.span`
  color: ${props => props.theme.color.blue600};
`;

// form
export const FormWrapper = styled.form`
  margin-top: 20px;

  > div:not(:first-child) {
    margin-top: 20px;
  }

  > div:last-child {
    margin-top: 24px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.color.gray700};
`;

export const InputWrapper = styled(InputField)`
  margin-top: 4px;
`;

// right content
export const RightSide = styled(Col)`
  display: none;
  ${breakpoint.lg`
    display: block
  `};
`;

export const ImageWrapper = styled.div`
  background-image: url(${BgImage});
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;
