import styled from "styled-components";
import { InputField } from "components/field";
import { Para } from "components/typography";

// header
export const StyledHeader = styled.header`
  text-align: center;
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.color.blue600};
`;

// form
export const FormWrapper = styled.form`
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

export const StyledPara = styled(Para)`
  text-align: right;

  > a {
    color: ${props => props.theme.color.blue600};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
