import { createAction } from "@reduxjs/toolkit";

export const getIncomesCatRequest = createAction(
  "categories/getIncomesRequest"
);
export const getIncomesCatSuccess = createAction(
  "categories/getIncomesSuccess"
);
export const getIncomesCatError = createAction("categories/getIncomesError");

export const getCostsCatRequest = createAction("categories/getCostsRequest");
export const getCostsCatSuccess = createAction("categories/getCostsSuccess");
export const getCostsCatError = createAction("categories/getCostsError");

export const addIncomesCatRequest = createAction(
  "categories/addIncomesRequest"
);
export const addIncomesCatSuccess = createAction(
  "categories/addIncomesSuccess"
);
export const addIncomesCatError = createAction("categories/addIncomesError");

export const addCostsCatRequest = createAction("categories/addCostsRequest");
export const addCostsCatSuccess = createAction("categories/addCostsSuccess");
export const addCostsCatError = createAction("categories/addCostsError");

export const setEmptyIncomesCats = createAction(
  "categories/setEmptyIncomesCats"
);
export const setEmptyCostsCats = createAction("categories/setEmptyCostsCats");
