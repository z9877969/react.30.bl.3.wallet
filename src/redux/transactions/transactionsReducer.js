import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getCostsSuccess,
  getIncomesSuccess,
  addCostsSuccess,
  addIncomesSuccess,
} from "./transactionsActions";

const incomesReducer = createReducer([], {
  [getIncomesSuccess]: (state, action) => action.payload,
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
});

const costsReducer = createReducer([], {
  [getCostsSuccess]: (state, action) => action.payload,
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
});

const transactions = combineReducers({
  incomes: incomesReducer,
  costs: costsReducer,
});

export default transactions;
