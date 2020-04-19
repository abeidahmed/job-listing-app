import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ActionButton from "./components/action-button";
import { AdminContainer } from "components/layout";
import { fetchAllUsers } from "api/user";
import Icon from "components/icon";
import { setPageTitle } from "actions/page-head";
import Pagination from "./components/pagination";
import SearchField from "./components/search-field";
import { Table } from "components/table";
import TableBody from "./components/table-body";
import TableHead from "./components/table-head";
import { Spinner, PageHeadWrapper, MainContent } from "./style";

const UserList = ({
  error,
  isLoading,
  page,
  pageHead,
  fetchAllUsers,
  role,
  searchValue,
  userId
}) => {
  const [sortByNameState, setSortByNameState] = useState(false);
  const [sortByJoinDate, setSortByJoinDate] = useState(false);

  useEffect(() => {
    const sendTitle = title => {
      pageHead(title);
    };

    sendTitle("Users");
  }, [pageHead]);

  // render users with each search query and filters
  useEffect(() => {
    const fetchUsers = () => {
      fetchAllUsers();
    };

    fetchUsers();
  }, [fetchAllUsers, page, userId, role, searchValue, sortByNameState, sortByJoinDate]);

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
            <TableHead
              sortByNameState={sortByNameState}
              setSortByNameState={setSortByNameState}
              sortByJoinDate={sortByJoinDate}
              setSortByJoinDate={setSortByJoinDate}
            />
            <TableBody />
          </Table>
          <Pagination />
        </MainContent>
      )}
    </AdminContainer>
  );
};

const mapStateToProps = state => {
  const { page, userId, isLoading, error, role, searchTerm, sortBy } = state.usersReducer;
  return {
    error,
    isLoading,
    page,
    role,
    searchValue: searchTerm,
    sortName: sortBy,
    userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    pageHead: value => dispatch(setPageTitle(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
