import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";
import axios from "axios";
const initialState = {
  userList: [
    {
      emaimemberIdl: "",
      nickname: "",
      password: "",
    },
  ],
  isLoading: false,
  error: null,
  isLogin: false,
};

//회원가입 POST요청
export const __postMember = createAsyncThunk(
  "POST_SIGNUP",
  async (payload, thunkAPI) => {
    try {
      const { data } = await http.post("/members/join", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//로그인 POST요청
export const __postLogin = createAsyncThunk(
  "POST_LOGIN",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await axios.post(
        "3.38.99.102:3010/members/login",
        payload
      );
      console.log(data);
      // .then((res) => {
      //   sessionStorage.setItem("access_token", res.headers.access_token);
      //   sessionStorage.setItem("refresh_token", res.headers.refresh_token);
      //   return res;
      // });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const memberListSlice = createSlice({
  name: "memberList",
  initialState,
  reducers: {},
  extraReducers: {
    //post
    [__postMember.pending]: (state) => {
      state.isLoading = true;
    },
    [__postMember.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert("가입이 완료 되셨습니다!");
    },
    [__postMember.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //post
    [__postLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
      //   sessionStorage.setItem("userinfo", JSON.stringify(action.payload));
    },
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default memberListSlice.reducer;
