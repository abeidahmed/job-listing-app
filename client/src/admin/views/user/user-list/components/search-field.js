import React from "react";
import { Search } from "components/search";
import { SearchWrapper } from "./style";

export const SearchField = () => {
  return (
    <SearchWrapper>
      <Search type="text" placeholder="Search" size="sm" />
    </SearchWrapper>
  );
};
