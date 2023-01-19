import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";
// import { useNavigate } from "react-router";

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
      const { data } = await http.post("/list", payload);
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
      const { data } = await http.get(`/quiz/${payload}`);
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
      const data = await http.put(`/quiz/${payload.id}`, {
        title: payload.id,
        content: payload.content,
        answer: payload.answer,
      });
      if (data.status === 201) {
        alert("수정되었습니다.");
      }

      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __submitAnswer = createAsyncThunk(
  "SUBMIT_ANSWER",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      // console.log(payload.id);
      // console.log(payload.answer);
      const data = await http.post(`/quiz/${payload.id}/answer`, {
        answer: payload.answer,
      });
      console.log(data);
      console.log(data.data.correct);
      if (data.status === 200) {
        data.data.correct ? alert("정답입니다") : alert("땡~");
      }
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePostDetail = createAsyncThunk(
  "DELETE_POST_DETAIL",
  async (payload, thunkAPI) => {
    // const navigate = useNavigate();

    console.log(payload);
    try {
      const data = await http.delete(`/quiz/${payload}`);
      if (data.status === 204) {
        alert("삭제되었습니다");
        // navigate("/List");
      }
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
      // const target = state.records.findIndex(
      //   (comment) => comment.id === action.payload
      // );
      // state.records.splice(target, 1);
    },
    [__deletePostDetail.rejected]: () => {},
    [__deletePostDetail.pending]: () => {},
    [__submitAnswer.pending]: (state) => {
      state.isLoading = true;
    },
    [__submitAnswer.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__submitAnswer.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

// export const {} = detailSlice.actions;
export default detailSlice.reducer;
