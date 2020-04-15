export const authToken = getState => {
  const token = getState().currentUserReducer.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  if (token) config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};
