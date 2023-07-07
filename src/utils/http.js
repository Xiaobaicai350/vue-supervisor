// axios基础的封装
import axios from "axios";
const httpInstance = axios.create({
  baseURL: "http://10.199.66.165:8080",
  timeout: 5000,
});

// 拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    let token = window.localStorage.getItem("token");
    token && (config.headers.token = token);
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e);
  }
);

export default httpInstance;
