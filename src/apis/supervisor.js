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
