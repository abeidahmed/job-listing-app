import axios from "axios";
import { authToken } from "middleware/auth-token";
import { POST_USER_DATA } from "./types";

export const postUserAction = (user, token) => {
  return {
    type: POST_USER_DATA,
    payload: {
      user,
      token
    }
  };
};

export const fetchCurrentUser = () => (dispatch, getState) => {
  axios
    .get("/api/v1/currentUser", authToken(getState))
    .then(res => dispatch(postUserAction(res.data.user, res.data.token)))
    .catch(err => console.log(err));
};
