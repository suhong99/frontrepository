import axios from "axios";
const http = axios.create({
  baseURL: "http://3.38.99.102:3010",
  timeout: 100000,
  // headers: { "X-Custom-Header": "foobar" },
  //   Authorization :  ////token 넣음
});
// console.log(http.baseURL);
// console.log("safds");
// console.log(http);
export default http;
