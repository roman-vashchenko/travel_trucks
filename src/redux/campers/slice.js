import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    currentItem: null,
    selectedItems: [],
    total: 0,
    isLoading: false,
  },
  reducers: {
    addToSelectedList: (state, { payload }) => {
      if (state.selectedItems.includes(payload)) {
        state.selectedItems = state.selectedItems.filter(
          (item) => item !== payload
        );
      } else {
        state.selectedItems.push(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, { payload, meta }) => {
        state.isLoading = false;
        state.total = payload.total;
        if (meta.arg === 1) {
          state.items = payload.items;
        } else {
          state.items = [...state.items, ...payload.items];
        }
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload === 404) {
          state.items = [];
        }
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentItem = payload;
      })
      .addCase(fetchCamperById.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload === 404) {
          state.currentItem = null;
        }
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const { addToSelectedList } = campersSlice.actions;
