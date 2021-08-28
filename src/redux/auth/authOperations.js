import { createReducer } from "@reduxjs/toolkit";
import { getUserApi, loginApi, registerApi } from "../../utils/firebaseApi";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  getUserRequest,
  getUserSuccess,
  getUserError,
} from "./authActions";

export const register = (data) => (dispatch) => {
  dispatch(registerRequest());

  registerApi(data)
    .then((data) => dispatch(registerSuccess(data)))
    .catch((err) => dispatch(registerError(err.message)));
};

export const login = (data) => (dispatch) => {
  dispatch(loginRequest());

  loginApi(data)
    .then((data) => dispatch(loginSuccess(data)))
    .catch((err) => dispatch(loginError(err.message)));
};

export const getUser = () => (dispatch, getState) => {
  dispatch(getUserRequest());

  const { idToken } = getState().auth.user;

  getUserApi(idToken)
    .then((data) => dispatch(getUserSuccess(data)))
    .catch((err) => dispatch(getUserError(err.message)));
};
