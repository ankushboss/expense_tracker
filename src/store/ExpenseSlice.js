import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
  name: "Expense",
  initialState: {
    tranasctions: [],
    balance: 0,
  },
  reducers: {
    handleTranaction(state, action) {
      if (action.payload.type === "Add") {
        state.balance += action.payload.amt;
      } else if (action.payload.type === "Remove") {
        state.balance -= action.payload.amt;
      }

      state.tranasctions.push(action.payload);
    },
  },
});

export const ExpenseAction = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
