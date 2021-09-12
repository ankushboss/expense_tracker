import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice from "./ExpenseSlice";

const store = configureStore({
  reducer: {
    expense: ExpenseSlice,
  },
});

export default store;
