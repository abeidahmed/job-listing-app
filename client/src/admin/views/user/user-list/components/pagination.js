import React from "react";
import { connect } from "react-redux";
import Icon from "components/icon";
import { Para, Span } from "components/typography";
import { setUsersPage } from "actions/user-action";
import { StyledButton } from "components/button";
import { PagiMobile, PaginationText, PaginationWrapper, PaginationContainer } from "./style";

const Pagination = ({
  limit,
  hasNextPage,
  hasPrevPage,
  nextPage,
  page,
  pagingCounter,
  prevPage,
  setPage,
  totalPages,
  totalUsers
}) => {
  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <PagiMobile>
        <StyledButton
          color="bordered"
          size="sm"
          onClick={() => setPage(prevPage)}
          disabled={!hasPrevPage}
        >
          Previous
        </StyledButton>
      </PagiMobile>
      <PagiMobile>
        <StyledButton
          color="bordered"
          size="sm"
          onClick={() => setPage(nextPage)}
          disabled={!hasNextPage}
        >
          Next
        </StyledButton>
      </PagiMobile>

      <PaginationText>
        <Para size="sm" color="gray">
          Showing{" "}
          <Span weight="medium" size="sm">
            {Math.min(pagingCounter, totalUsers)}
          </Span>{" "}
          to{" "}
          <Span weight="medium" size="sm">
            {Math.min((page - 1) * limit + limit, totalUsers)}
          </Span>{" "}
          of{" "}
          <Span weight="medium" size="sm">
            {totalUsers}
          </Span>{" "}
          results
        </Para>
      </PaginationText>

      <PaginationContainer>
        <button onClick={() => setPage(prevPage)} disabled={!hasPrevPage}>
          <Icon glyph="chevron-left" width="20" height="20" />
        </button>
        {pageNumbers.map(pageNumber => (
          <button
            className={pageNumber === page ? "active" : null}
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={() => setPage(nextPage)} disabled={!hasNextPage}>
          <Icon glyph="chevron-right" width="20" height="20" />
        </button>
      </PaginationContainer>
    </PaginationWrapper>
  );
};

const mapStateToProps = state => {
  const {
    limit,
    hasNextPage,
    hasPrevPage,
    nextPage,
    page,
    pagingCounter,
    prevPage,
    totalPages,
    totalUsers
  } = state.usersReducer;
  return {
    limit,
    hasNextPage,
    hasPrevPage,
    nextPage,
    page,
    pagingCounter,
    prevPage,
    totalPages,
    totalUsers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPage: page => dispatch(setUsersPage(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
