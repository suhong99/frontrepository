import axios from "axios";
const http = axios.create({
  baseURL: "https://f1rstweb.shop",
  // baseURL: "http://localhost:3001",
  timeout: 10000,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
  // headers: { "X-Custom-Header": "foobar" },
  //   Authorization :  ////token 넣음
});

http.interceptors.request.use(function (config) {
  // console.log("들어가나");
  const access_token = sessionStorage.getItem("authorization");
  if (access_token !== null) {
    // console.log(access_token);
    // config.headers.common["Authorization"] = `${access_token}`;
    config.headers["Authorization"] = `${access_token}`;

    // config.headers.common["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

export default http;
