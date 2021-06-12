import axios from "axios";
import qs from "qs";

//登录
const postLogin = (form) =>
  axios.post("/api/login", qs.stringify(form)).then((res) => res.data);

const postRegister = (form) =>
  axios.post("/api/register", qs.stringify(form)).then((res) => res.data);

const getCar = (form) =>
  axios.get("/car", { params: form }).then((res) => res.data);
export { postLogin, postRegister, getCar };
