import { createSlice } from "@reduxjs/toolkit";
import { addCommentReq, getCommentsReq } from "../api/comments";
import { getThunkReqComments } from "./getThunkReq";

export const getComments = getThunkReqComments("get", getCommentsReq);
export const addComments = getThunkReqComments("add", addCommentReq);

const init = {
  commentResult: "",
  postComment: "",
  status: "",
};
const comments = createSlice({
  name: "comments",
  initialState: init,
  reducers: {},
  extraReducers: {
    [getComments.pending]: (state, action) => {
      state.status = "loading";
    },
    [getComments.fulfilled]: (state, { payload }) => {
      state.commentResult = payload;
      state.status = "success";
    },
    [getComments.rejected]: (state, { error }) => {
      state.status = "failed";
    },
    [addComments.pending]: (state, action) => {
      state.status = "loading";
    },
    [addComments.fulfilled]: (state, { payload }) => {
      state.postComment = payload;
      state.status = "success";
    },
    [addComments.rejected]: (state, { error }) => {
      state.status = "failed";
    },
  },
});
export default comments.reducer;
