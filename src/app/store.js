import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/count-splice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
