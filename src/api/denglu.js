import request from "@/utils/request";
import store from '@/store'
export const onLogin = (data) => {
  return request({
    method: "POST",
    url: "/user/login",
    data,
  });
};

export const getUserInfo = () => {
  return request({
    url: "/user",
    // headers: {
    //   Authorization: `${store.state.tokenObj.token}`,
    // },
  });
};
