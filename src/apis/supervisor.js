// 封装举报人相关接口
import request from "@/utils/http";

// 添加举报信息
export const insertSuperviseInfo = ({ address, vAQILevel, description }) => {
  return request({
    url: "/supervisor/report",
    method: "POST",
    data: {
      address,
      vAQILevel,
      description,
    },
  });
};

// 添加举报信息
//这里的id是写死的，之后再修改
export const ListExInformation = () => {
  return request({
    url: "/supervisor?id=1",
    method: "GET",
  });
};
