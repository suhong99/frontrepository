import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../api/http";

const initialState = {
  list: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getPost = createAsyncThunk(
  "GET_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await http.get("/list");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPost = createAsyncThunk(
  "ADD_POST",
  async (payload, thunkAPI) => {
    console.log("payload", payload);
    try {
      const { data } = await http.post("/list", payload);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "DELETE_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await http.delete(`/list/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost: (state, action) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPost.pending]: (state) => {
      state.isSuccess = false;
      state.isLoading = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.list.push(action.payload);
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deletePost.fulfilled]: (state, action) => {
      const target = state.list.findIndex(
        (comment) => comment.id === action.payload
      );

      state.list.splice(target, 1);
    },
    [__deletePost.rejected]: () => {},
    [__deletePost.pending]: () => {},
  },
});

export const { clearPost } = postSlice.actions;
export default postSlice.reducer;
