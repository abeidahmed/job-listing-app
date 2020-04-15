import styled, { keyframes } from "styled-components";

// spinner
const spinEffect = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-40%, -50%);

  svg {
    animation: 1s linear infinite ${spinEffect};
  }
`;

export const PageHeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainContent = styled.section`
  margin-top: 24px;
`;
