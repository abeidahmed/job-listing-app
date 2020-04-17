import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";

// modal container
export const ModalWrapper = styled.div`
  display: ${props => (props.isActive ? "block" : "none")};
  position: fixed;
  z-index: 99999999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  padding-top: 30px;

  ${breakpoint.lg`
    padding-top: 60px;
  `}
`;

export const ModalInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ModalChild = styled.div`
  position: absolute;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  margin: auto;
  width: 90%;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow.large};
  overflow: hidden;

  ${breakpoint.sm`
    width: 100%;
    max-width: 490px;
  `}

  ${breakpoint.lg`
    top: 0;
    bottom: auto;
  `}
`;

// modal top
export const ModalBody = styled.div`
  background-color: white;
  padding: 24px 32px 0 32px;
`;

// modal bottom
export const ModalFoot = styled.div`
  background-color: ${props => props.theme.color.gray100};
  margin-top: 24px;
  padding: 16px 32px;
  ${breakpoint.sm`
    display: flex;
    flex-direction: row-reverse;
  `}
`;
