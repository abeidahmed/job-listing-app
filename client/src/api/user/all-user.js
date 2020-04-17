import axios from "axios";
import queryString from "query-string";
import { authToken } from "middleware/auth-token";
import { usersFetchError, getAllUsersAction, usersLoading } from "actions/user-action";

export const fetchAllUsers = () => (dispatch, getState) => {
  const { role, searchTerm, sortBy } = getState().usersReducer;
  const url = queryString.stringifyUrl(
    {
      url: "/api/v1/allUsers",
      query: {
        role,
        name: searchTerm,
        sortBy
      }
    },
    { skipEmptyString: true }
  );

  axios
    .get(url, authToken(getState))
    .then(res => {
      dispatch(usersLoading());
      dispatch(getAllUsersAction(res.data));
    })
    .catch(err => dispatch(usersFetchError(err.message)));
};
