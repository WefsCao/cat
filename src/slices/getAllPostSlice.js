import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPostReq } from "../api/post";
import { getThunkReqPost } from "./getThunkReq";

export const readAllPost = getThunkReqPost("getAllPost", getAllPostReq);
const init = {
  posts: "",
  status: "",
  error: "",
};
const getAllPost = createSlice({
  name: "all",
  initialState: init,
  extraReducers: {
    [readAllPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [readAllPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.status = "success";
    },
    [readAllPost.rejected]: (state, { error }) => {
      state.status = "failed";
      state.error = error;
    },
  },
});

export default getAllPost.reducer;
