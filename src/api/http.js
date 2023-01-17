import axios from "axios";
const http = axios.create({
  baseURL: "http://f1rstweb.shop",
  timeout: 100000,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
  // headers: { "X-Custom-Header": "foobar" },
  //   Authorization :  ////token 넣음
});

// http.interceptors.request.use(function (config) {
//   const accessToken = sessionStorage.getItem("accessToken");
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

export default http;
