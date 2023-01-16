import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { isDev, serverUrl } from ".";

//Thunk 함수
export const __getList = createAsyncThunk(
  "GET_TODO",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/list");
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __updateList = createAsyncThunk(
  "UPDATE_POST",
  async (payload, thunkAPI) => {
    try {
      axios.patch(`http://localhost:3001/list/${payload.id}`, payload);
      console.log(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  list: {
    id: 0,
    content: "",
    username: "",
    title: "",
  },
  error: null,
  isLoading: false,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    clearPost: (state) => {
      state.list = {
        id: 0,
        content: "",
        username: "",
        title: "",
      };
    },
  },
  extraReducers: {
    [__getList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getList.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__updateList.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { List } = listSlice.actions;
export default listSlice.reducer;
