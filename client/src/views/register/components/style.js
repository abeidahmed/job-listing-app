import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";
import BgImage from "./building.jpg";
import { InputField } from "components/field";

// header
export const StyledSpan = styled.span`
  color: ${props => props.theme.color.blue600};
`;

// social button
export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px -6px;
  > div {
    padding: 0 6px;
    width: 100%;
  }
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
export const RightSide = styled.div`
  display: none;
  ${breakpoint.lg`
    display: block;
    width: 60%;
`}
`;

export const ImageWrapper = styled.div`
  display: none;
  ${breakpoint.lg`
    display: block;
    background-image: url(${BgImage});
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;
