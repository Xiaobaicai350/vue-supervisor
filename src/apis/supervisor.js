// 封装举报人相关接口
import request from "@/utils/http";

//监督员登录
export const login = ({ telephone, password }) => {
  return request({
    url: "/supervisor/login",
    method: "POST",
    data: {
      telephone,
      password,
    },
  });
};
//监督员注册
export const register = ({ telephone, name, password }) => {
  return request({
    url: "/supervisor/register",
    method: "POST",
    data: {
      telephone,
      name,
      password,
    },
  });
};

// 添加举报信息
export const insertSuperviseInfo = ({
  supervisorId,
  address,
  vAQILevel,
  description,
}) => {
  return request({
    url: "/supervisor/report",
    method: "POST",
    data: {
      supervisorId,
      address,
      vAQILevel,
      description,
    },
  });
};

// 查询自己提交的全部异常信息
export const ListExInformation = () => {
  return request({
    url: "/supervisor/all",
    method: "GET",
  });
};

//监督员个人信息
export const info = () => {
  return request({
    url: "/supervisor/info",
    method: "GET",
  });
};
