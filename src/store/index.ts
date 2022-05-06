import { configureStore } from "@reduxjs/toolkit";
import customerDetailReducer from "./reducers/customer-details";

export const store = configureStore({
  reducer: {
      customer: customerDetailReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
