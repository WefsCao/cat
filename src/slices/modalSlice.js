import { createSlice } from "@reduxjs/toolkit";

const init = {
  visible: false,
};
const modal = createSlice({
  name: "modal",
  initialState: init,
  reducers: {
    initShowModal: (state) => {
      state.visible = false;
    },
    setShowModal: (state) => {
      state.visible = !state.visible;
    },
  },
});
export const { setShowModal, initShowModal } = modal.actions;
export default modal.reducer;
