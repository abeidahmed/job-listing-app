import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "actions/types";

const initialState = {
  isActive: false
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        isActive: action.payload
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isActive: action.payload
      };
    default:
      return state;
  }
};
