import { PAGE_HEAD } from "actions/types";

const initialState = {
  pageHead: ""
};

export const pageHeadReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_HEAD:
      return {
        ...state,
        pageHead: action.payload
      };
    default:
      return state;
  }
};
