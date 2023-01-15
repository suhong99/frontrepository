import axios from "axios";
const http = axios.create({
  baseURL: "3.38.99.102:3010",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
  //   Authorization :  ////token 넣음
});
// console.log(http.baseURL);
// console.log("safds");
// console.log(http);
export default http;
