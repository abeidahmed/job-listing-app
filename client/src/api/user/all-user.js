import axios from "axios";
import queryString from "query-string";
import { authToken } from "middleware/auth-token";
import {
  allUsersFetchError,
  getAllUsersAction,
  isLoadingWhileUsersFetch
} from "actions/user-action";

export const fetchAllUsers = (role, name) => (dispatch, getState) => {
  const url = queryString.stringifyUrl(
    {
      url: "/api/v1/allUsers",
      query: {
        role,
        name
      }
    },
    { skipEmptyString: true }
  );
  axios
    .get(url, authToken(getState))
    .then(res => {
      dispatch(isLoadingWhileUsersFetch());
      dispatch(getAllUsersAction(res.data));
    })
    .catch(err => dispatch(allUsersFetchError(err.message)));
};
