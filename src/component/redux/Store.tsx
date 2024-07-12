import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    data: useReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
