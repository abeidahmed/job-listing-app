import {
  ALL_USERS_FETCH_ERROR,
  FETCH_ALL_USERS,
  IS_LOADING_WHILE_USERS_FETCH,
  SET_USER_ROLE
} from "actions/types";

const initialState = {
  users: [],
  isLoading: false,
  error: [],
  role: undefined
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
    case SET_USER_ROLE:
      return {
        ...state,
        role: action.payload
      };
    default:
      return state;
  }
};
