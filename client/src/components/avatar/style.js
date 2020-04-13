import styled from "styled-components";

export const StyledAvatar = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  margin-left: 20px;

  > img {
    height: 32px;
    width: 32px;
    border-radius: 99999px;
    border: 2px solid transparent;
    transition: 150ms all ease-in-out;
  }

  > span {
    display: flex;
    align-items: center;
  }

  &:focus img {
    border-color: ${props => props.theme.color.gray400};
  }
`;
