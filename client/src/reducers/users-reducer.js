import { FETCH_ALL_USERS } from "actions/types";

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
    default:
      return state;
  }
};
