import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
    addCostsCatSuccess,
    addIncomesCatSuccess,
  getCostsCatSuccess,
  getIncomesCatSuccess,
  setEmptyCostsCats,
  setEmptyIncomesCats,
} from "./categoriesActions";

const incomesCatReducer = createReducer([], {
  [getIncomesCatSuccess]: (_, { payload }) => payload,
  [addIncomesCatSuccess]: (state, { payload }) => [...state, payload],
});

const costsCatReducer = createReducer([], {
  [getCostsCatSuccess]: (_, { payload }) => payload,
  [addCostsCatSuccess]: (state, { payload }) => [...state, payload],
});

const isEmptyReducer = createReducer(
  {
    costs: false,
    incomes: false,
  },
  {
    [setEmptyCostsCats]: (state, { payload }) => ({ ...state, costs: payload }),
    [setEmptyIncomesCats]: (state, { payload }) => ({
      ...state,
      incomes: payload,
    }),
  }
);

const categories = combineReducers({
  incomesCat: incomesCatReducer,
  costsCat: costsCatReducer,
  isEmpty: isEmptyReducer,
});

export default categories;
