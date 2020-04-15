import React, { useEffect } from "react";
import { connect } from "react-redux";
import { pageHeadAction } from "actions/page-head";
import { fetchAllUsers } from "api/user";
import { ActionButton } from "./components/action-button";
import { AdminContainer } from "components/layout";
import Icon from "components/icon";
import { Pagination } from "components/pagination";
import { SearchField } from "./components/search-field";
import { Table } from "components/table";
import { TableBody } from "./components/table-body";
import { TableHead } from "./components/table-head";
import { Spinner, PageHeadWrapper, MainContent } from "./style";

const UserList = ({ allUsers, error, isLoading, pageHead, fetchAllUsers }) => {
  useEffect(() => {
    const sendTitle = title => {
      pageHead(title);
    };

    const fetchUsers = () => {
      fetchAllUsers();
    };

    sendTitle("Users");
    fetchUsers();
  }, [pageHead, fetchAllUsers]);

  return (
    <AdminContainer>
      <PageHeadWrapper>
        <SearchField />
        <ActionButton />
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
    error: state.usersReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pageHead: value => dispatch(pageHeadAction(value)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
