import axios from "axios";

const API_KEY = "AIzaSyDc8MYd3sZcwYx1_D9_7ur7YeFN5WxBZ5Y";

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const baseUrl = {
  DB: "https://test-project-86606-default-rtdb.firebaseio.com/",
  AUTH: "https://identitytoolkit.googleapis.com/v1",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

export const registerApi = (data) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signUp",
      { ...data, returnSecureToken: true },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const loginApi = (data) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signInWithPassword",
      { ...data, returnSecureToken: true },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const getUserApi = (idToken) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:lookup",
      { idToken },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { email, localId } = data.users[0];
      return { email, localId };
    })
    .catch((err) => {
      throw err;
    });
};

// "/users/ada/name.json?auth=<ID_TOKEN>"

export const addTransactionApi = ({
  localId,
  transType,
  transaction,
  idToken,
}) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .post(`/users/${localId}/transactions/${transType}.json`, transaction, {
      params: {
        auth: idToken,
      },
    })
    .then(({ data: { name: id } }) => ({...transaction, id}))
    .catch((err) => {
      throw err;
    });
};
