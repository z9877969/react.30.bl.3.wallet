import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3004/";

export const postTransactionApi = ({ apiEnd, data }) => {
  return axios
    .post(apiEnd, data)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const getTransactionsApi = (apiEnd) => {
  return axios
    .get(apiEnd)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const postTransactionCatApi = ({ apiEnd, category }) => {
  return axios
    .post(apiEnd, category)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const getTransactionCatsApi = (apiEnd) => {
  return axios
    .get(apiEnd)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};
