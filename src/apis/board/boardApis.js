import { instance } from "../utils/instance";

// 게시물 목록 요청 함수
export const getBoardListRequest = async () => {
  try {
    const response = await instance.get("/board/list");
    return response;
  } catch (error) {
    return error.response;
  }
};

// 특정 게시물 요청 함수
export const getBoardDetailRequest = async (boardId) => {
  try {
    const response = await instance.get(`/board/${boardId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
