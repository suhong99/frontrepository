import axios from "axios";
const http = axios.create({
<<<<<<< HEAD
  // baseURL: "http://f1rstweb.shop",
  baseURL: "http://localhost:3001/",
=======
  baseURL: "http://f1rstweb.shop",
>>>>>>> a58c1f2678634b8bba844bbb6ec9277e7166dc34
  timeout: 100000,
  // headers: { "X-Custom-Header": "foobar" },
  //   Authorization :  ////token 넣음
});
// console.log(http.baseURL);
// console.log("safds");
// console.log(http);
export default http;
