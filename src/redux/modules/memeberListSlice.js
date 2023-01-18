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
  isLogin: false,
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
      console.log(error);
      if (error.response.status === 409) {
        alert("작성 조건을 지켜주세요.");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//아이디 중복확인
export const __checkMemberId = createAsyncThunk(
  "CHECK_MEMBERID",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await http.post("/members/join/check/Id", {
        memberId: payload,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      if (error.response.status === 409) {
        alert("이미 존재하는 아이디입니다.");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __checkMemberNick = createAsyncThunk(
  "CHECK_MEMBERNICK",
  async (payload, thunkAPI) => {
    try {
      const { data } = await http.post("/members/join/check/nickname", {
        nickname: payload,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      if (error.response.status === 409) {
        alert("이미 존재하는 닉네임입니다.");
      }

      return thunkAPI.rejectWithValue(error);
    }
  }
);

//로그인 POST요청
export const __postLogin = createAsyncThunk(
  "POST_LOGIN",
  async (payload, thunkAPI) => {
    try {
      const data = await http.post("/members/login", payload).then((res) => {
        console.log(res.headers.authorization);
        sessionStorage.setItem("authorization", res.headers.authorization);
        // sessionStorage.setItem("refreshToken", res.data.refreshToken);
        return res;
      });
      if (data.status === 200) {
        alert("로그인 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.status === 409) {
        alert("아이디와 패스워드를 확인해주세요");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const memberListSlice = createSlice({
  name: "memberList",
  initialState,
  reducers: {
    checkLogin: (state, action) => {
      state.isLogin = true;
    },
    checkLogout: (state, action) => {
      state.isLogin = false;
    },
  },
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
      sessionStorage.setItem("memberinfo", JSON.stringify(action.payload));
    },
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__checkMemberId.pending]: (state) => {
      state.isLoading = true;
    },
    [__checkMemberId.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert("중복 확인 되었습니다.");
    },
    [__checkMemberId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__checkMemberNick.pending]: (state) => {
      state.isLoading = true;
    },
    [__checkMemberNick.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert("중복 확인 되었습니다.");
    },
    [__checkMemberNick.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { checkLogin, checkLogout } = memberListSlice.actions;
export default memberListSlice.reducer;
