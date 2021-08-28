import { getTransactionsApi, postTransactionApi } from "../../utils/apiService";
import { addTransactionApi } from "../../utils/firebaseApi";
import {
  getCostsRequest,
  getCostsSuccess,
  getCostsError,
  getIncomesRequest,
  getIncomesSuccess,
  getIncomesError,
  addIncomesRequest,
  addIncomesSuccess,
  addIncomesError,
  addCostsRequest,
  addCostsSuccess,
  addCostsError,
} from "./transactionsActions";

export const getCosts = () => (dispatch) => {
  dispatch(getCostsRequest());

  getTransactionsApi("costs")
    .then((transactions) => dispatch(getCostsSuccess(transactions)))
    .catch((e) => dispatch(getCostsError(e.message)));
};

export const getIncomes = () => (dispatch) => {
  dispatch(getIncomesRequest());

  getTransactionsApi("incomes")
    .then((transactions) => dispatch(getIncomesSuccess(transactions)))
    .catch((e) => dispatch(getIncomesError(e.message)));
};

export const addTransaction =
  ({ transType, transaction }) =>
  (dispatch, getState) => {
    transType === "incomes"
      ? dispatch(addIncomesRequest())
      : dispatch(addCostsRequest());

    const { localId, idToken } = getState().auth.user;

    addTransactionApi({
      localId,
      transType,
      transaction,
      idToken,
    })
      .then((transaction) => {
        transType === "incomes"
          ? dispatch(addIncomesSuccess(transaction))
          : dispatch(addCostsSuccess(transaction));
      })
      .catch((e) => {
        transType === "incomes"
          ? dispatch(addIncomesError(e.message))
          : dispatch(addCostsError(e.message));
      });
  };
