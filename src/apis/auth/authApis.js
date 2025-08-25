import { instance } from "../utils/instance";

export const getPrincipalRequest = async () => {
  try {
    const response = await instance.get("/auth/principal");
    return response;
  } catch (error) {
    return error.response;
  }
};

// 회원가입 요청 함수
export const signupRequest = async (data) => {
  try {
    const response = await instance.post("/auth/signup", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

// 로그인 요청 함수
export const signinRequest = async (data) => {
  try {
    const response = await instance.post("/auth/signin", data);
    return response;
  } catch (error) {
    return error.response;
  }
};
