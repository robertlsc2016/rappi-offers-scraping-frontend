import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status_view: "INITIAL_VIEW",
  any_modal_open: false,
};

const statusViewSlice = createSlice({
  name: "statusView",
  initialState,
  reducers: {
    initial: (state) => {
      state.status_view = "INITIAL_VIEW";
    },
    search: (state) => {
      state.status_view = "SEARCHING_VIEW";
    },
    inMarket: (state) => {
      state.status_view = "IN_MARKET";
    },
    openModal: (state) => {
      state.any_modal_open = true;
    },
    closeModal: (state) => {
      state.any_modal_open = false;
    },
  },
});

export const { initial, search, inMarket } = statusViewSlice.actions;
export const statusViewReducer = statusViewSlice.reducer;
// export default statusViewSlice.reducer;
