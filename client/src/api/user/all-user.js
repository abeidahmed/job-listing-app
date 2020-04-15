import axios from "axios";
import { authToken } from "middleware/auth-token";
import { getAllUsersAction } from "actions/user-action";

export const fetchAllUsers = () => (dispatch, getState) => {
  axios
    .get("/api/v1/allUsers", authToken(getState))
    .then(res => {
      console.log(res.data);
      dispatch(getAllUsersAction(res.data));
    })
    .catch(err => console.log(err));
};
