import React from "react";
import { connect } from "react-redux";
import { searchUsers } from "actions/user-action";
import { Search } from "components/search";
import { SearchWrapper } from "./style";

const SearchField = ({ searchValue, searchTerm }) => {
  return (
    <SearchWrapper>
      <Search
        type="text"
        placeholder="Search"
        size="sm"
        value={searchValue}
        onChange={e => searchTerm(e.target.value)}
      />
    </SearchWrapper>
  );
};

const mapStateToProps = state => {
  return {
    searchValue: state.usersReducer.searchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchTerm: value => dispatch(searchUsers(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField);
