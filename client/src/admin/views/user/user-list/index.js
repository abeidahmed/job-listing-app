import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { pageHeadAction } from "actions/page-head";
import { AdminContainer } from "components/layout";
import Icon from "components/icon";
import { Para, Span } from "components/typography";
import { Search } from "components/search";
import { StyledButton } from "components/button";

const PageHeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  max-width: 300px;
  width: 100%;
`;

const MainContent = styled.section`
  margin-top: 24px;
`;

const TableContainer = styled.div`
  display: inline-block;
  min-width: 100%;
`;

const StyledTable = styled.table`
  min-width: 100%;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow.small};
`;

const Th = styled.th`
  padding: 12px 20px;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => props.theme.color.gray500};
  text-transform: uppercase;

  ${props =>
    props.hasButton &&
    css`
      > div {
        display: flex;
        align-items: center;
        cursor: pointer;

        > span {
          padding-right: 4px;
        }
      }
    `}
`;

const Tbody = styled.tbody`
  background-color: white;
`;

const Tr = styled.tr`
  border-bottom: 1px solid ${props => props.theme.color.gray200};
  &:last-child {
    border-color: transparent;
  }
`;

const Td = styled.td`
  padding: 12px 20px;
  white-space: nowrap;
  font-size: 14px;
  color: ${props => props.theme.color.gray700};
  line-height: 22px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 99999px;
  }
`;

const NameWrapper = styled.div`
  margin-left: 12px;
  font-weight: 500;
`;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

const PaginationContainer = styled.ul`
  display: flex;
  align-items: center;
  font-size: 14px;

  button {
    padding: 8px 16px;
    display: inline-flex;
    align-items: center;
    border: 1px solid ${props => props.theme.color.gray300};
    position: relative;
    background-color: white;
    color: ${props => props.theme.color.gray700};

    &:focus {
      outline: none;
      border-color: ${props => props.theme.color.blue600};
      z-index: 10;
      box-shadow: ${props => props.theme.shadow.outline};
    }

    &:first-child,
    &:last-child {
      padding: 6px 8px;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:not(:first-child) {
      margin-left: -1px;
    }
  }

  span {
    padding: 8px 16px;
    display: inline-flex;
    align-items: center;
    border: 1px solid ${props => props.theme.color.gray300};
    margin-left: -1px;
    position: relative;
    background-color: white;
  }
`;

const UserList = ({ pageHead }) => {
  useEffect(() => {
    const sendTitle = title => {
      pageHead(title);
    };

    sendTitle("Users");
  }, [pageHead]);

  return (
    <AdminContainer>
      <PageHeadWrapper>
        <SearchWrapper>
          <Search type="text" placeholder="Search" size="sm" />
        </SearchWrapper>
        <div>
          <StyledButton color="primary" size="sm">
            Add user
          </StyledButton>
        </div>
      </PageHeadWrapper>
      <MainContent>
        <TableContainer>
          <StyledTable>
            <thead>
              <Tr>
                <Th hasButton>
                  <div role="button">
                    <span>Name</span>
                    <Icon glyph="sort-solid" height="12" width="12" />
                  </div>
                </Th>
                <Th>Email address</Th>
                <Th>Role</Th>
                <Th hasButton>
                  <div role="button">
                    <span>Joined on</span>
                    <Icon glyph="sort-solid" height="12" width="12" />
                  </div>
                </Th>
                <Th hasButton>
                  <div role="button">
                    <span>Job listing</span>
                    <Icon glyph="sort-solid" height="12" width="12" />
                  </div>
                </Th>
                <Th></Th>
              </Tr>
            </thead>
            <Tbody>
              <Tr>
                <Td>
                  <UserProfile>
                    <img
                      src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <NameWrapper>
                      <span>Abeid Ahmed</span>
                    </NameWrapper>
                  </UserProfile>
                </Td>
                <Td>abeidahmed92@gmail.com</Td>
                <Td>Admin</Td>
                <Td>22 Feb, 2020</Td>
                <Td>42</Td>
                <Td>
                  <StyledButton color="iconPrimary" iconOnlyPrimary>
                    <Icon glyph="dots-horizontal" />
                  </StyledButton>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <UserProfile>
                    <img
                      src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <NameWrapper>
                      <span>Abeid Ahmed</span>
                    </NameWrapper>
                  </UserProfile>
                </Td>
                <Td>abeidahmed92@gmail.com</Td>
                <Td>Admin</Td>
                <Td>22 Feb, 2020</Td>
                <Td>42</Td>
                <Td>
                  <StyledButton color="iconPrimary" iconOnlyPrimary>
                    <Icon glyph="dots-horizontal" />
                  </StyledButton>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <UserProfile>
                    <img
                      src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <NameWrapper>
                      <span>Abeid Ahmed</span>
                    </NameWrapper>
                  </UserProfile>
                </Td>
                <Td>abeidahmed92@gmail.com</Td>
                <Td>Admin</Td>
                <Td>22 Feb, 2020</Td>
                <Td>42</Td>
                <Td>
                  <StyledButton color="iconPrimary" iconOnlyPrimary>
                    <Icon glyph="dots-horizontal" />
                  </StyledButton>
                </Td>
              </Tr>
            </Tbody>
          </StyledTable>
        </TableContainer>
        <PaginationWrapper>
          <div>
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
          </div>
          <div>
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
          </div>
        </PaginationWrapper>
      </MainContent>
    </AdminContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    pageHead: value => dispatch(pageHeadAction(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserList);
