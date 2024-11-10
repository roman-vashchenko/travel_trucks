import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    propertys: [],
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
});

export const { addLocation, addProperty, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
