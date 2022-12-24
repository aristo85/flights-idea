import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import flightsSlice from "../features/flights/flightSlice";

export const store = configureStore({
  reducer: {
    flights: flightsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
