import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (page, thunkAPI) => {
    const { location, propertys } = thunkAPI.getState().campers;

    let query = propertys.length ? `?p=${page}&l=5&${propertys.join("&")}` : "";

    if (location) {
      query += query
        ? `&location=${location}`
        : `?p=${page}&l=5&location=${location}`;
    }
    try {
      console.log(query);
      const endpoint =
        propertys.length === 0 && !location
          ? `campers?p=${page}&l=5`
          : `campers${query}`;
      console.log(endpoint);
      const { data } = await axios.get(`${endpoint}`);

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
