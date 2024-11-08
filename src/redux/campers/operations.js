import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampersByFilter",
  async (page, thunkAPI) => {
    const { location, propertys } = thunkAPI.getState().campers;

    let query = propertys.length ? `?p=${page}&l=5&${propertys.join("&")}` : "";

    if (location) {
      query += query
        ? `&location=${location}`
        : `?p=${page}&l=5&location=${location}`;
    }
    try {
      const endpoint =
        propertys.length === 0 && !location
          ? `campers?p=${page}&l=5`
          : `campers${query}`;
      toast.loading("Loading data...");

      const { data } = await axios.get(`${endpoint}`);
      toast.dismiss();
      if (page === 1) {
        toast.success(`Found ${data.total} travel trucks`);
      }
      return data;
    } catch (error) {
      toast.dismiss();
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCampersById",
  async (id, thunkAPI) => {
    try {
      toast.loading("Loading data...");
      const { data } = await axios.get(`campers/${id}`);
      toast.dismiss();
      return data;
    } catch (error) {
      toast.dismiss();
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
