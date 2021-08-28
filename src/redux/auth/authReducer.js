import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  getUserSuccess,
  loginSuccess,
  logOut,
  registerSuccess,
} from "./authActions";

const iS = {
  email: "",
  idToken: "",
  localId: "",
  refreshToken: "",
};

const userReducer = createReducer(iS, {
  [registerSuccess]: (_, { payload }) => {
    const { kind, expiresIn, ...toStore } = payload;
    return toStore;
  },
  [loginSuccess]: (_, { payload }) => {
    const { kind, expiresIn, registered, ...toStore } = payload;
    return toStore;
  },
  [getUserSuccess]: (state, { payload }) => ({ ...state, ...payload }),
  [logOut]: () => iS,
});

const isAuthReducer = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getUserSuccess]: () => true,
  [logOut]: () => false,
});

const userPersistConfig = {
  key: "token",
  storage,
  whitelist: ["idToken", "refreshToken"],
};

const authReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  isAuth: isAuthReducer,
});

export default authReducer;
