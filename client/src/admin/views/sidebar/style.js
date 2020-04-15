import styled from "styled-components";
import { zIndex } from "helpers/z-index";

export const Main = styled.aside`
  display: flex;
  flex-direction: column;
  max-width: 256px;
  width: 100%;
  height: 100vh;
  background-color: white;
  border-right: 1px solid ${props => props.theme.color.gray200};
  overflow-y: hidden;
  flex-shrink: 0;

  @media (max-width: 991.98px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${zIndex.sidebar};
    transition: 150ms all ease-in-out;
    transform: ${props => (props.isActive ? "translateX(0)" : "translateX(-100%)")};
  }
`;
