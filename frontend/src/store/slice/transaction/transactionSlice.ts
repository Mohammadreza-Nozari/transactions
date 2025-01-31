import { IInitialState } from "@/interfaces/IInitialState";
import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IInitialState = {
  selectedCurrency: "USD",
  transactions: [],
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const transaction = state.transactions.find((t) => t.id === id);
      if (transaction) {
        transaction.status = status;
      }
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
  },
});

export const { setCurrency, updateStatus, setTransactions, addTransaction } =
  transactionSlice.actions;

export const selectSelectedCurrency = (state: RootState) =>
  state.transactions.selectedCurrency;
export const selectTransactions = (state: RootState) =>
  state.transactions.transactions;
