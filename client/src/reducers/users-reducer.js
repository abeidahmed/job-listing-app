import {
  ALL_USERS_FETCH_ERROR,
  FETCH_ALL_USERS,
  IS_LOADING_WHILE_USERS_FETCH
} from "actions/types";

const initialState = {
  users: [],
  isLoading: false,
  error: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        error: [],
        isLoading: false
      };
    case ALL_USERS_FETCH_ERROR:
      return {
        ...state,
        users: [],
        isLoading: false,
        error: action.payload
      };
    case IS_LOADING_WHILE_USERS_FETCH:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
