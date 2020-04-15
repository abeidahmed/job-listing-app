import axios from "axios";
import { POST_USER_DATA } from "./types";

export const postUserAction = (user, token) => {
  return {
    type: POST_USER_DATA,
    payload: user,
    token
  };
};

export const fetchCurrentUser = () => (dispatch, getState) => {
  const token = getState().userReducer.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  if (token) config.headers["Authorization"] = `Bearer ${token}`;

  axios
    .get("/api/v1/currentUser", config)
    .then(res => {
      dispatch({
        type: POST_USER_DATA,
        payload: res.data,
        token: res.data.token
      });
    })
    .catch(err => console.log(err));
};
