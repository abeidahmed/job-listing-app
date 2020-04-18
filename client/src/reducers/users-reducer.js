import {
  ALL_USERS_FETCH_ERROR,
  CLEAR_USER_ID,
  FETCH_ALL_USERS,
  USERS_LOADING,
  SEARCH_USERS,
  SET_USER_ROLE,
  SET_USER_ID,
  SET_USERS_PAGE,
  SORT_USERS
} from "actions/types";

const initialState = {
  users: [],
  isLoading: false,
  error: [],
  role: "",
  searchTerm: "",
  sortBy: "",
  userId: "",
  totalPages: "",
  page: 1,
  limit: "",
  totalUsers: "",
  pagingCounter: 1,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: "",
  nextPage: ""
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        users: action.payload.users,
        error: [],
        isLoading: false,
        totalPages: action.payload.totalPages,
        page: action.payload.page,
        limit: action.payload.limit,
        totalUsers: action.payload.totalUsers,
        pagingCounter: action.payload.pagingCounter,
        hasPrevPage: action.payload.hasPrevPage,
        hasNextPage: action.payload.hasNextPage,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage
      };
    case ALL_USERS_FETCH_ERROR:
      return {
        ...state,
        users: [],
        isLoading: false,
        error: action.payload
      };
    case USERS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SET_USER_ROLE:
      return {
        ...state,
        role: action.payload
      };
    case SEARCH_USERS:
      return {
        ...state,
        searchTerm: action.payload
      };
    case SORT_USERS:
      return {
        ...state,
        sortBy: action.payload
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload
      };
    case CLEAR_USER_ID:
      return {
        ...state,
        userId: ""
      };
    case SET_USERS_PAGE:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};
