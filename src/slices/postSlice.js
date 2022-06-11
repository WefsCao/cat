import { createSlice } from '@reduxjs/toolkit';
import { deletePostReq, readPostReq } from '../api/post';
import { getThunkReqPost } from './getThunkReq';

// Thunk
export const readPost = getThunkReqPost('readPost', readPostReq);
export const deletePost = getThunkReqPost('deletePost', deletePostReq);

const init = {
  post: '',
  deletedPostId: {},
  status: '',
  error: '',
};
const post = createSlice({
  name: 'post',
  initialState: init,
  reducers: {
    setDeletedPostId: (state, { payload }) => {
      state.deletedPostId._id = payload;
    },
  },
  extraReducers: {
    [readPost.pending]: (state) => {
      state.status = 'loading';
    },
    [readPost.fulfilled]: (state, { payload }) => {
      state.post = payload;
    },
    [readPost.rejected]: (state, { error }) => {
      state.error = error;
    },
    [deletePost.pending]: (state) => {
      state.status = 'loading';
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.status = 'success';
    },
    [deletePost.rejected]: (state, { error }) => {
      state.error = error;
    },
  },
});
export const { setDeletedPostId } = post.actions;
export default post.reducer;
