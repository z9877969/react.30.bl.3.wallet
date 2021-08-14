import {
  getTransactionCatsApi,
  postTransactionCatApi,
} from "../../utils/apiService";
import {
  getCostsCatRequest,
  getCostsCatSuccess,
  getCostsCatError,
  getIncomesCatRequest,
  getIncomesCatSuccess,
  getIncomesCatError,
  addIncomesCatRequest,
  addIncomesCatSuccess,
  addIncomesCatError,
  addCostsCatRequest,
  addCostsCatSuccess,
  addCostsCatError,
  setEmptyIncomesCats,
  setEmptyCostsCats,
} from "./categoriesActions";

export const getIncomesCat = () => (dispatch) => {
  dispatch(getIncomesCatRequest());

  getTransactionCatsApi("incomesCat")
    .then((categories) => {
      if (categories.length) {
        dispatch(getIncomesCatSuccess(categories));
      } else {
        dispatch(setEmptyIncomesCats(true));
      }
    })
    .catch((e) => dispatch(getIncomesCatError(e.message)));
};

export const getCostsCat = () => (dispatch) => {
  dispatch(getCostsCatRequest());

  getTransactionCatsApi("costsCat")
    .then((categories) => {
      if (categories.length) {
        dispatch(getCostsCatSuccess(categories));
      } else {
        dispatch(setEmptyCostsCats(true));
      }
    })
    .catch((e) => dispatch(getCostsCatError(e.message)));
};

export const addCategory =
  ({ transType, category }) =>
  (dispatch) => {
    transType === "incomes"
      ? dispatch(addIncomesCatRequest())
      : dispatch(addCostsCatRequest());

    postTransactionCatApi({ apiEnd: transType + "Cat", category })
      .then((category) =>
        transType === "incomes"
          ? dispatch(addIncomesCatSuccess(category))
          : dispatch(addCostsCatSuccess(category))
      )
      .catch((e) =>
        transType === "incomes"
          ? dispatch(addIncomesCatError(e.message))
          : dispatch(addCostsCatError(e.message))
      );
  };
