import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { pageHeadAction } from "actions/page-head";
import { AdminContainer } from "components/layout";
import Icon from "components/icon";
import { Pagination } from "components/pagination";
import { Search } from "components/search";
import { StyledButton } from "components/button";
import { Table, Th, Tbody, Td, Tr } from "components/table";

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
        <Table>
          <thead>
            <Tr>
              <Th hasButton title="Name" />
              <Th title="Email address" />
              <Th title="Role" />
              <Th hasButton title="Joined on" />
              <Th hasButton title="Job listing" />
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
        </Table>

        <Pagination />
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
