import React from "react";
import { Search } from "components/search";
import { SearchWrapper } from "./style";

export const SearchField = ({ searchValue, searchTerm }) => {
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
