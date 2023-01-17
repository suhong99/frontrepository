import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { serverUrl } from ".";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export const __getPostDetail = createAsyncThunk(
  "GET_POST_DETAIL",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/list");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updatePostDetail = createAsyncThunk(
  "UPDATE_POST_DETAIL",
  async (payload, thunkAPI) => {
    try {
      await axios.patch("http://localhost:3001/list", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPostDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //업데이트
    [__updatePostDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePostDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__updatePostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = listSlice.actions;
export default listSlice.reducer;
