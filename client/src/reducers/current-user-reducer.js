import {
  CURRENT_USER_FETCH_ERROR,
  CURRENT_USER_LOADING,
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
        error: [],
        currentUser: action.payload.user,
        token: action.payload.token,
        isLoading: false
      };
    case CURRENT_USER_FETCH_ERROR:
      localStorage.removeItem("token");
      return {
        currentUser: [],
        token: null,
        error: action.payload,
        isLoading: false
      };
    case CURRENT_USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        isLoading: false,
        token: null,
        currentUser: [],
        error: []
      };
    default:
      return state;
  }
};
