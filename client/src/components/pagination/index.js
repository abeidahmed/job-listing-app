import React from "react";
import Icon from "components/icon";
import { Para, Span } from "components/typography";
import { StyledButton } from "components/button";
import { PagiMobile, PaginationText, PaginationWrapper, PaginationContainer } from "./style";

export const Pagination = () => {
  return (
    <PaginationWrapper>
      <PagiMobile>
        <StyledButton color="bordered" size="sm">
          Previous
        </StyledButton>
      </PagiMobile>
      <PagiMobile>
        <StyledButton color="bordered" size="sm">
          Next
        </StyledButton>
      </PagiMobile>

      <PaginationText>
        <Para size="sm" color="gray">
          Showing{" "}
          <Span weight="medium" size="sm">
            1
          </Span>{" "}
          to{" "}
          <Span weight="medium" size="sm">
            8
          </Span>{" "}
          of{" "}
          <Span weight="medium" size="sm">
            48
          </Span>{" "}
          results
        </Para>
      </PaginationText>

      <PaginationContainer>
        <button>
          <Icon glyph="chevron-left" width="20" height="20" />
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>
          <Icon glyph="chevron-right" width="20" height="20" />
        </button>
      </PaginationContainer>
    </PaginationWrapper>
  );
};
