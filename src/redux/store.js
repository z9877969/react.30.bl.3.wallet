import { configureStore, createReducer } from "@reduxjs/toolkit";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";

// const reducer = (state = [], action) => state;

// const qwe = createReducer(
//   { a: 0, b: "", c: [] },
//   {
//     ["actionType"]: () => null,
//   }
// );

const store = configureStore({
  reducer: {
    transactions,
    categories,
  },
});

export default store;
