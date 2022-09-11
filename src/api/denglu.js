import request from "@/utils/request";

export const onLogin = (data) => {
  return request({
    method: "POST",
    url: "/user/login",
    data
  });
}


