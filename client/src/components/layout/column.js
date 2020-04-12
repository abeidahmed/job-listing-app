import styled, { css } from "styled-components";
import { breakpoint } from "utils/breakpoint";

export const Col = styled.div`
  padding-right: ${props => props.gap};
  padding-left: ${props => props.gap};
  width: 100%;
  max-width: ${props => props.width};

  ${props =>
    props.sm &&
    css`
      ${breakpoint.sm`
      max-width: ${props => props.sm}
    `}
    `};
  ${props =>
    props.md &&
    css`
      ${breakpoint.md`
      max-width: ${props => props.md}
    `}
    `};
  ${props =>
    props.lg &&
    css`
      ${breakpoint.lg`
      max-width: ${props => props.lg}
    `}
    `};
  ${props =>
    props.xl &&
    css`
      ${breakpoint.xl`
      max-width: ${props => props.xl}
    `}
    `};
`;
