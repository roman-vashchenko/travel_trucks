import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    currentItem: null,
    location: "",
    propertys: [],
    total: 0,
    isLoader: false,
    error: null,
  },
  reducers: {
    addLocation: (state, { payload }) => {
      state.location = payload;
    },
    addProperty: (state, { payload }) => {
      if (state.propertys.includes(payload)) {
        state.propertys = state.propertys.filter(
          (property) => property !== payload
        );
      } else {
        state.propertys.push(payload);
      }
    },
    resetFilters: (state) => {
      state.location = "";
      state.propertys = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = null;
        state.isLoader = true;
      })
      .addCase(fetchCampers.fulfilled, (state, { payload, meta }) => {
        state.isLoader = false;
        state.total = payload.total;
        if (meta.arg === 1) {
          state.items = payload.items;
        } else {
          state.items = [...state.items, ...payload.items];
        }
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.error = payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.error = null;
        state.isLoader = true;
        state.currentItem = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.isLoader = false;
        state.currentItem = payload;
      })
      .addCase(fetchCamperById.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.error = payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const { addLocation, addProperty, resetFilters } = campersSlice.actions;
