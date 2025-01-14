import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  any_modal_open: false,
};

const statusModal = createSlice({
  name: "statusView",
  initialState,
  reducers: {
    openModal: (state) => {
      state.any_modal_open = true;
    },
    closeModal: (state) => {
      state.any_modal_open = false;
    },
  },
});

export const { openModal, closeModal } = statusModal.actions;
export const statusModalReducer = statusModal.reducer;
// export default statusViewSlice.reducer;
