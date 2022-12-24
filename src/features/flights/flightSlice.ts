import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Flight, Stops } from "../types";
import { fetchFlightsData } from "./flightsAPI";

export interface FlightsState {
  flightList: Flight[] | null | undefined;
  status: "idle" | "loading" | "failed";
  filter: Stops;
}

const initialState: FlightsState = {
  flightList: null,
  status: "idle",
  filter: Stops.ALL,
};

export const fetchData = createAsyncThunk("flights/fetchFlights", async () => {
  const response = await fetchFlightsData();
  // The value we return becomes the `fulfilled` action payload
    return response;
});

export const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Stops>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "idle";
        state.flightList = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setFilter } = flightsSlice.actions;
export const selectFlightsData = (state: RootState) => state.flights.flightList;

export default flightsSlice.reducer;
