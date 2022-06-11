import { createSlice } from "@reduxjs/toolkit";
import { loginReq, logoutReq, registerReq } from "../api/auth";
import { getThunkReq } from "./getThunkReq";

// init state
const init = {
  register: {
    username: "",
    password: "",
    confirmpassword: "",
  },
  login: {
    username: "",
    password: "",
  },
  auth: {
    authInfo: "",
    authError: "",
    status: "",
  },
};

// Thunk request
export const register = getThunkReq("register", registerReq);
export const login = getThunkReq("login", loginReq);
export const logout = getThunkReq("logout", logoutReq);

// Slice
const auth = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    changeInputValue: (state, { payload: { formType, inputName, value } }) => {
      state[formType][inputName] = value;
    },
    initialInputValue: (state, { payload }) => {
      state[payload.formType] = init[payload.formType];
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.auth.status = "loading";
    },
    [register.fulfilled]: (state, { payload }) => {
      // state.auth.authInfo = payload.data;
      state.auth.status = payload.status;
      state.auth.authError = "";
    },
    [register.rejected]: (state, { error }) => {
      state.auth.authInfo = "";
      state.auth.authError = error;
      state.auth.status = "failed";
    },
    [login.pending]: (state) => {
      state.auth.status = "loading";
    },
    [login.fulfilled]: (state, { payload }) => {
      state.auth.authInfo = payload.data;
      state.auth.authError = "";
      state.auth.status = payload.status;
    },
    [login.rejected]: (state, { error }) => {
      state.auth.authError = error;
      state.auth.status = "failed";
    },
    [logout.pending]: (state) => {
      state.auth.status = "loading";
    },
    [logout.fulfilled]: (state, { payload }) => {
      state.auth.authInfo = payload.data;
      state.auth.authError = "";
      state.auth.status = payload.status;
    },
    [logout.rejected]: (state, { error }) => {
      state.auth.authError = error;
      state.auth.status = "failed";
    },
  },
});

export const { changeInputValue, initialInputValue } = auth.actions;
export default auth.reducer;
