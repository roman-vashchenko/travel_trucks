import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    const { location, propertys } = thunkAPI.getState().filters;
    let query = propertys.length ? `?${propertys.join("&")}` : "";

    if (location) {
      query += query ? `&location=${location}` : `?location=${location}`;
    }
    try {
      console.log(query);
      const endpoint =
        propertys.length === 0 && !location ? "campers" : `campers${query}`;
      const { data } = await axios.get(`${endpoint}`);

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
