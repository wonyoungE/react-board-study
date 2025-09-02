import { instance } from "../utils/instance";

// 비밀번호 변경 요청 함수
export const changePwRequest = async (data) => {
  try {
    const response = await instance.post(`/account/change/password`, data);
    return response;
  } catch (error) {
    return error.response;
  }
};

// 메일 요청 함수
export const sendMailRequest = async (data) => {
  try {
    const response = await instance.post(`/mail/send`, data);
    return response;
  } catch (error) {
    return error.response;
  }
};
