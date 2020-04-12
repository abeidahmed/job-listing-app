import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";

export const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;

  ${breakpoint.sm`
    max-width: 576px;
  `}

  ${breakpoint.md`
    max-width: 768px;
  `}

  ${breakpoint.lg`
    max-width: 992px;
  `}

  ${breakpoint.xl`
    max-width: 1170px;
  `}
`;
