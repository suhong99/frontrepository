import axios from "axios";
const http = axios.create({
  baseURL: "http://f1rstweb.shop",
  timeout: 100000,
  // headers: { "X-Custom-Header": "foobar" },
  //   Authorization :  ////token 넣음
});
// console.log(http.baseURL);
// console.log("safds");
// console.log(http);
export default http;
