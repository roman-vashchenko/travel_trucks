import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    propertys: [],
  },
  reducers: {
    addFilter: (state, { payload }) => {
      if (state.propertys.includes(payload)) {
        state.propertys = state.propertys.filter(
          (property) => property !== payload
        );
      } else {
        state.propertys.push(payload);
      }
    },
  },
});

export const { addFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
