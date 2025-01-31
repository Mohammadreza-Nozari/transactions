import { configureStore } from "@reduxjs/toolkit";
import { api as v1 } from "./api/v1";
import authReducer from "./slice/auth";
import appReducer from "./slice/app";
import { io } from "socket.io-client";
import {
  addTransaction,
  setTransactions,
  transactionSlice,
  updateStatus,
} from "./slice/transaction/transactionSlice";

const socket = io("http://localhost:3000"); // Connect to NestJS WebSocket server

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    [v1.reducerPath]: v1.reducer,
    transactions: transactionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(v1.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;



// Listen for real-time updates from NestJS WebSocket server
socket.on("initialTransactions", (transactions) => {
  store.dispatch(setTransactions(transactions));
});

socket.on("newTransaction", (transaction) => {
  store.dispatch(addTransaction(transaction));
});

socket.on("transactionUpdated", (updatedTransaction) => {
  store.dispatch(updateStatus(updatedTransaction));
});
