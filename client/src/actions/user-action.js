import axios from "axios";
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
    .get("/api/v1/currentUser", setAuthToken(getState))
    .then(res => {
      dispatch({
        type: POST_USER_DATA,
        payload: {
          user: res.data.user,
          token: res.data.token
        }
      });
    })
    .catch(err => console.log(err));
};

export const setAuthToken = getState => {
  const token = getState().currentUserReducer.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  if (token) config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};
