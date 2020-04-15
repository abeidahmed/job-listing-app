import axios from "axios";
import { authToken } from "middleware/auth-token";
import {
  allUsersFetchError,
  getAllUsersAction,
  isLoadingWhileUsersFetch
} from "actions/user-action";

export const fetchAllUsers = () => (dispatch, getState) => {
  axios
    .get("/api/v1/allUsers", authToken(getState))
    .then(res => {
      dispatch(isLoadingWhileUsersFetch());
      dispatch(getAllUsersAction(res.data));
    })
    .catch(err => dispatch(allUsersFetchError(err)));
};
