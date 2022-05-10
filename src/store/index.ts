import { configureStore } from "@reduxjs/toolkit";
import AddressReducer from "./reducers/address-reducer";

export const store = configureStore({
  reducer: {
      address: AddressReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
