import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../api/http";

export const __getCommentsThunk = createAsyncThunk(
  "GET_COMMENTS",
  async (_, thunkAPI) => {
    try {
      const { data } = await http.get(`/comments`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getCommnetsByTodoId = createAsyncThunk(
  "GET_COMMENT_BY_POST_ID",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await http.get(`/comment/${payload}`);
      // data 어떻게 오는지 확인하고 뒷 부분 해야함. 현재 401때문에 진행 안됨.
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await http.delete(`/comment/${payload}`);
      if (data.status === 204) {
        alert("댓글이 삭제되었습니다.");
      }
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      if (e.response.status === 400) {
        alert("삭제에 실패했습니다.");
      }
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "UPDATE_COMMENT",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await http.put(`/comment/${payload.cId}`, {
        comment: payload.comment,
      });
      if (data.status === 201) {
        alert("댓글이 수정되었습니다.");
      }
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const data = await http.post(`/comment/${payload.id}`, {
        comment: payload.comment,
      });
      if (data.status === 201) {
        alert("댓글이 작성되었습니다.");
      }
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.status === 400) {
        alert("잘못된 방법입니다.");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsByTodoId: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.comments = null;
    },
  },
  extraReducers: {
    // 전체 댓글 조회
    [__getCommentsThunk.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__getCommentsThunk.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.data = action.payload;
    },
    [__getCommentsThunk.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.error = action.payload; //data안에 allComments가 들어감
    },

    // 댓글 조회 (todoId)
    [__getCommnetsByTodoId.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [__getCommnetsByTodoId.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.data = action.payload;
      // console.log(state.commentsByTodoId.data);
      // console.log("get에서");
      // console.log(state.commentsByTodoId.data.allComments);
    },
    [__getCommnetsByTodoId.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },

    // 댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      // console.log(state.commentsByTodoId);
      // console.log("삭제에서");

      const target = state.commentsByTodoId.data.allComments.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentsByTodoId.data.allComments.splice(target, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },

    // 댓글 수정
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      const target = state.commentsByTodoId.data.allComments.findIndex(
        (comment) => comment.id === action.payload.cId
      );
      state.isLoading = false;
      console.log(action.payload);
      state.commentsByTodoId.data.allComments.splice(target, 1, action.payload);
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 댓글 추가
    [__addComment.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.data = action.payload;
    },
    [__addComment.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
