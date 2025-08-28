import { instance } from "../utils/instance";

// 유저 요청 함수
export const getUserByUserIdRequest = async (userId) => {
  try {
    const response = await instance.get(`/user/${userId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
