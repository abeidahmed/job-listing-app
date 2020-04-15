import axios from "axios";
import { authToken } from "middleware/auth-token";
import {
  currentUserFetchError,
  isLoadingWhileCurrentUserFetch,
  postUserAction
} from "actions/user-action";

export const fetchCurrentUser = () => (dispatch, getState) => {
  axios
    .get("/api/v1/currentUser", authToken(getState))
    .then(res => {
      dispatch(isLoadingWhileCurrentUserFetch());
      dispatch(postUserAction(res.data.user, res.data.token));
    })
    .catch(err => dispatch(currentUserFetchError(err)));
};
