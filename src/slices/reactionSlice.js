import { createSlice } from '@reduxjs/toolkit';
import { addReactionReq, getReactionsReq } from '../api/reactions';
import { getThunkReq } from './getThunkReq';

export const getReactions = getThunkReq('reactions/getReactions', getReactionsReq);
export const addReaction = getThunkReq('reactions/addReaction', addReactionReq);
const init = {
  reactions: '',
  status: '',
  error: '',
};
const reactions = createSlice({
  name: 'reactions',
  initialState: init,
  extraReducers: {
    [getReactions.pending]: (state) => {
      state.status = 'loading';
    },
    [getReactions.fulfilled]: (state, { payload }) => {
      state.reactions = payload;
      state.status = 'success';
    },
    [getReactions.rejected]: (state, { error }) => {
      state.error = error;
    },
    [addReaction.pending]: (state) => {
      state.status = 'loading';
    },
    [addReaction.fulfilled]: (state, { payload }) => {
      state.reactions = payload;
      state.status = 'success';
    },
    [addReaction.rejected]: (state, { error }) => {
      state.error = error;
    },
  },
});
export default reactions.reducer;
