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

// 프로필 수정 요청 함수
export const updateUser = async (data) => {
  try {
    const response = await instance.post(`/user/edit/${data.userId}`, data);
    return response;
  } catch (error) {
    return error.response;
  }
};
