import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    currentItem: null,
    isLoader: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = null;
        state.isLoader = true;
      })
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.isLoader = false;
        state.items = payload.items;
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.error = payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
