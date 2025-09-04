import { instance } from "../utils/instance";

// 유저 요청 함수
export const getUserByUserId = async (userId) => {
  try {
    const response = await instance.get(`/user/${userId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
