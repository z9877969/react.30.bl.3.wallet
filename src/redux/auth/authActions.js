import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("auth/registerRequest");
export const registerSuccess = createAction("auth/registerSuccess");
export const registerError = createAction("auth/registerError");

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

export const getUserRequest = createAction("auth/getUserRequest");
export const getUserSuccess = createAction("auth/getUserSuccess");
export const getUserError = createAction("auth/getUserError");

export const logOut = createAction("auth/logOut");
