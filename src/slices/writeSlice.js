import { createSlice } from "@reduxjs/toolkit";
import { updatePostReq, writeReq } from "../api/post";
import { getThunkReqPost } from "./getThunkReq";
// Thunk
export const writePost = getThunkReqPost("writePost", writeReq);
export const updatePost = getThunkReqPost("post/updatePost", updatePostReq);

// inint State
const init = {
  title: "",
  body: "",
  tags: [],
  originalPost: {},
  error: "",
  status: "",
};

// slice
const write = createSlice({
  name: "write",
  initialState: init,
  reducers: {
    changePostContent: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
    setInitWriteField: (state) => {
      state.title = "";
      state.tags = [];
    },

    setOriginalPost: (state, { payload }) => {
      state.originalPost._id = payload._id;
      state.title = payload.title;
      state.body = payload.body;
      state.tags = payload.tags;
    },
  },
  extraReducers: {
    [writePost.pending]: (state, action) => {
      state.status = "loading";
    },
    [writePost.fulfilled]: (state, { payload }) => {
      state.status = "success";
    },
    [writePost.rejected]: (state, { error }) => {
      state.status = "failed";
      state.error = error;
    },
    [updatePost.pending]: (state) => {
      state.status = "loading";
    },
    [updatePost.fulfilled]: (state, { payload }) => {
      state.title = payload.title;
      state.body = payload.body;
      state.tags = payload.tags;
    },
    [updatePost.rejected]: (state, { error }) => {
      state.error = error;
    },
  },
});
export const { changePostContent, setOriginalPost, setInitWriteField } =
  write.actions;
export default write.reducer;
