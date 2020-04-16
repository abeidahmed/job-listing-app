import {
  CURRENT_USER_FETCH_ERROR,
  IS_LOADING_WHILE_CURRENT_USER_FETCH,
  LOGOUT_USER,
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
        error: [],
        currentUser: action.payload.user,
        token: action.payload.token,
        isLoading: false
      };
    case CURRENT_USER_FETCH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: [],
        token: null,
        error: action.payload,
        isLoading: false
      };
    case IS_LOADING_WHILE_CURRENT_USER_FETCH:
      return {
        ...state,
        isLoading: true
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        token: null,
        currentUser: [],
        error: []
      };
    default:
      return state;
  }
};
