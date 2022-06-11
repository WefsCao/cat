import { createSlice } from "@reduxjs/toolkit";
import { checkReq } from "../api/auth";
import { getThunkReq } from "./getThunkReq";

export const check = getThunkReq("check", checkReq);
const init = {
  userInfo: "",
  userError: "",
  status: "",
};

const user = createSlice({
  name: "user",
  initialState: init,
  reducers: {
    setTempUser: (state, { payload: userParsed }) => {
      state.userInfo = userParsed;
    },
    initUser: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
  },
  extraReducers: {
    [check.pending]: (state) => {
      state.status = "loading";
    },
    [check.fulfilled]: (state, { payload }) => {
      state.userInfo = payload.data;
      state.userError = "";
      state.status = payload.status;
    },
    [check.rejected]: (state, { error }) => {
      state.userError = error;
      state.userInfo = "";
      state.status = "failed";
    },
  },
});

export const { setTempUser, initUser } = user.actions;
export default user.reducer;
