import { configureStore } from "@reduxjs/toolkit";
import memberList from "../modules/memeberListSlice";
// import post from "../../pages/Post";
import list from "../../pages/List";

const store = configureStore({
  reducer: {
    memberList,
    // post,
    list,
  },
});

export default store;
