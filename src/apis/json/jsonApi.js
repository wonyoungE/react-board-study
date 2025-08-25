// json과 관련된 API는 모두 여기

import { jsonInstance } from "../utils/instance";

// ex) 로그인/회원가입 -> AuthAPI
// 게시판 관련 요청 -> BoardAPI

export const getPostRequest = async (postId) => {
  try {
    // jsonInstance -> baseURL 있음
    const response = await jsonInstance.get(`posts/${postId}`);
    // 요청한 컴포넌트에서 응답을 사용할 수 있게 return
    return response;
  } catch (error) {
    return error.response;
  }
};
