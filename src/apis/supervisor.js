// 封装举报人相关接口
import request from "@/utils/http";

// 添加举报信息
//这里的id是写死的，之后再修改

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
//这里的id是写死的，之后再修改
export const ListExInformation = () => {
  return request({
    url: "/supervisor?id=1",
    method: "GET",
  });
};

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
