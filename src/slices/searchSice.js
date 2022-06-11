import { createSlice } from '@reduxjs/toolkit';
import { searchReq } from '../api/search';
import { getThunkReq } from './getThunkReq';

export const searchPostsByUsername = getThunkReq('post/searchPosts', searchReq);

const init = {
  searchResult: '',
  status: '',
  searchError: '',
};
const search = createSlice({
  name: 'search',
  initialState: init,
  extraReducers: {
    [searchPostsByUsername.pending]: (state) => {
      state.status = 'loading';
    },
    [searchPostsByUsername.fulfilled]: (state, { payload }) => {
      state.searchResult = payload.data;
      state.searchError = '';
      state.status = 'success';
    },
    [searchPostsByUsername.rejected]: (state, { error }) => {
      state.searchError = error;
      state.searchResult = '';
      state.status = 'failed';
    },
  },
});
export default search.reducer;
