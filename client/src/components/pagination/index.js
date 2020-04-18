import React from "react";
import Icon from "components/icon";
import { Para, Span } from "components/typography";
import { StyledButton } from "components/button";
import { PagiMobile, PaginationText, PaginationWrapper, PaginationContainer } from "./style";

export const Pagination = ({ totalPages }) => {
  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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
        {pageNumbers.map(pageNumber => (
          <button>{pageNumber}</button>
        ))}
        <button>
          <Icon glyph="chevron-right" width="20" height="20" />
        </button>
      </PaginationContainer>
    </PaginationWrapper>
  );
};
