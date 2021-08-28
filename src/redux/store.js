import { configureStore, createReducer } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";
import auth from "./auth/authReducer";

// const authPersistConfig = {
//   key: 'token',
//   storage,
//   whitelist: ["idToken", "refreshToken"]
// }

const store = configureStore({
  reducer: {
    auth,
    transactions,
    categories,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
