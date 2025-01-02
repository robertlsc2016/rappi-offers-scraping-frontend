import { configureStore } from "@reduxjs/toolkit";
import { statusViewReducer } from "./statusViewSlice";

export const store = configureStore({
  reducer: {
    statusView: statusViewReducer,
  },
});
