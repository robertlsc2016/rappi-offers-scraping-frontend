import { configureStore } from "@reduxjs/toolkit";
import { statusViewReducer } from "./statusViewSlice";
import { statusModalReducer } from "./statusModal";

export const store = configureStore({
  reducer: {
    statusView: statusViewReducer,
    statusModal: statusModalReducer
  },
});
