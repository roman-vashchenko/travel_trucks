import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state.filters.propertys);
    const propertys = state.filters.propertys;
    if (propertys === 0) {
      try {
        const { data } = await axios.get("campers");

        console.log(data);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
      }
    }
    try {
      const { data } = await axios.get(`campers?${propertys.join("&")}`);

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCampersById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
