import axios from "axios";
import { authToken } from "middleware/auth-token";
import { createUser } from "actions/user-action";
import { clearUserData } from "actions/create-user";

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
      dispatch(clearUserData());
    })
    .catch(err => console.log(err));
};
