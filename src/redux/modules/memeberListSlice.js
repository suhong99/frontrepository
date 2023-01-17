import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";
// import axios from "axios";
const initialState = {
  memberList: [
    {
      memberId: "",
      nickname: "",
      password: "",
    },
  ],
  isLoading: false,
  error: null,
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
      const { data } = await http
        .post("/members/login", payload)
        .then((res) => {
          // console.log(res);

          sessionStorage.setItem("accessToken", res.data.accessToken);
          sessionStorage.setItem("refreshToken", res.data.refreshToken);

          return res;
        });
      console.log(data); // 성공하면 토큰이 찍힘

      return thunkAPI.fulfillWithValue(data);
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
      sessionStorage.setItem("memberinfo", JSON.stringify(action.payload));
      window.location.reload();

      // console.log(action.payload); //
    },
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default memberListSlice.reducer;