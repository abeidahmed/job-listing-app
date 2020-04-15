import {
  CURRENT_USER_FETCH_ERROR,
  IS_LOADING_WHILE_CURRENT_USER_FETCH,
  POST_USER_DATA
} from "actions/types";

const initialState = {
  currentUser: [],
  token: localStorage.getItem("token"),
  error: [],
  isLoading: false
};

export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_DATA:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        error: [],
        currentUser: action.payload.user,
        isLoading: false
      };
    case CURRENT_USER_FETCH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: [],
        error: action.payload,
        isLoading: false
      };
    case IS_LOADING_WHILE_CURRENT_USER_FETCH:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
