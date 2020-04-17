import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchUsers, setRole } from "actions/user-action";
import { ActionButton } from "./components/action-button";
import { AdminContainer } from "components/layout";
import { fetchAllUsers } from "api/user";
import Icon from "components/icon";
import { pageHeadAction } from "actions/page-head";
import { Pagination } from "components/pagination";
import { SearchField } from "./components/search-field";
import { Table } from "components/table";
import { TableBody } from "./components/table-body";
import { TableHead } from "./components/table-head";
import { Spinner, PageHeadWrapper, MainContent } from "./style";

const UserList = ({
  allUsers,
  error,
  isLoading,
  pageHead,
  fetchAllUsers,
  role,
  searchTerm,
  searchValue,
  sendRole
}) => {
  useEffect(() => {
    const sendTitle = title => {
      pageHead(title);
    };

    sendTitle("Users");
  }, [pageHead]);

  // render users with each search query and filters
  useEffect(() => {
    const fetchUsers = (role, searchValue) => {
      fetchAllUsers(role, searchValue);
    };

    fetchUsers(role, searchValue);
  }, [fetchAllUsers, role, searchValue]);

  return (
    <AdminContainer>
      <PageHeadWrapper>
        <SearchField searchTerm={searchTerm} searchValue={searchValue} />
        <ActionButton sendRole={sendRole} />
      </PageHeadWrapper>
      {isLoading || error.length !== 0 ? (
        <Spinner>
          <Icon glyph="spinner" color="#1633ff" />
        </Spinner>
      ) : (
        <MainContent>
          <Table>
            <TableHead />
            <TableBody allUsers={allUsers} />
          </Table>
          <Pagination />
        </MainContent>
      )}
    </AdminContainer>
  );
};

const mapStateToProps = state => {
  return {
    allUsers: state.usersReducer.users,
    isLoading: state.usersReducer.isLoading,
    error: state.usersReducer.error,
    role: state.usersReducer.role,
    searchValue: state.usersReducer.searchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pageHead: value => dispatch(pageHeadAction(value)),
    fetchAllUsers: (value, search) => dispatch(fetchAllUsers(value, search)),
    sendRole: value => dispatch(setRole(value)),
    searchTerm: value => dispatch(searchUsers(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
