import axios from "axios";

BASE_URL = "http://localhost:8080";

//登录
const postLogin = (form) =>
  axios.post(BASE_URL + "/api/login", form).then((res) => res.data);

export { postLogin };
