import axios from "axios";
import { authToken } from "middleware/auth-token";
import { logoutUser } from "actions/user-action";

export const logoutCurrentUser = () => (dispatch, getState) => {
  axios
    .delete("/api/v1/logout", authToken(getState))
    .then(res => dispatch(logoutUser(res)))
    .catch(err => console.log(err));
};
