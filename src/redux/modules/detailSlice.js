import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { serverUrl } from ".";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export const __addPostDetail = createAsyncThunk(
  "ADD_POST_DETAIL",
  async (payload, thunkAPI) => {
    console.log("payload", payload);
    try {
      const { data } = await axios.post("/list", payload);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPostDetail = createAsyncThunk(
  "GET_POST_DETAIL",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const { data } = await axios.get(`/list/${payload}`);
      // console.log("데이터", data);
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
      await axios.patch("/list", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePostDetail = createAsyncThunk(
  "DELETE_POST_DETAIL",
  async (payload, thunkAPI) => {
    try {
      const { data } = await delete `/list/${payload}`;
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [__addPostDetail.pending]: (state) => {
      state.isSuccess = false;
      state.isLoading = true;
    },
    [__addPostDetail.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.list.push(action.payload);
    },
    [__addPostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      // console.log("액션", action.payload);
      state.isLoading = false;
      state.list = action.payload;
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

    //삭제하기
    [__deletePostDetail.fulfilled]: (state, action) => {
      const target = state.records.findIndex(
        (comment) => comment.id === action.payload
      );

      state.records.splice(target, 1);
    },
    [__deletePostDetail.rejected]: () => {},
    [__deletePostDetail.pending]: () => {},
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;
