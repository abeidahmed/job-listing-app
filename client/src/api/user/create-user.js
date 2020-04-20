import axios from "axios";
import { authToken } from "middleware/auth-token";
import { createUser } from "actions/user-action";

export const createUserByAdmin = () => (dispatch, getState) => {
  const { firstName, lastName, email, role, password } = getState().createUser;
  axios
    .post(
      "/api/v1/createUser",
      {
        firstName,
        lastName,
        email,
        role,
        password
      },
      authToken(getState)
    )
    .then(res => {
      dispatch(createUser(res.data));
    })
    .catch(err => console.log(err));
};
