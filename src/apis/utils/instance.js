/**
 * Axios
 * 제일 큰 장점: 요청에 받아온 데이터를 response.data에서 바로 받아볼 수 있다
 * 즉, JSON 변환할 필요가 없음
 *
 * 직관적인 에러처리
 * 서버의 API를 찾을 수 없거나(404), 서버 내부의 문제(500)가 생겼을 때
 * fetch()는 이를 성공적인 요청으로 간주하지만
 * axios는 서버 에러를 실패로 처리해서 try...catch 구문으로 쉽게 잡아낼 수 있다
 *
 * 요청/응답 가로채기(Interceptors)
 * 모든 요청이 보내지기 전이나 모든 응답이 도착한 후에 중간 지점에서 공통 작업 처리 가능
 * 예를 들어, 모든 요청에 토큰을 자동으로 추가하거나, 특정 에러코드가 오면 자동으로 로그인 페이지로 보내는 등의 처리를 할 수 있다.
 * 라이브러리 install 해야함 - npm i axios
 * 프로미스 기반이므로 비동기 처리 해줘야함
 */

import axios from "axios";

export const fetchPost = async (postId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(response.data); // 게시물 데이터 들어있음
  } catch (error) {
    console.log(error);
  }
};

// jsonplaceholder로 가는 모든 요청의 공통 URL
export const jsonInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// 백엔드로 보내는 인스턴스 하나 생성
export const instance = axios.create({
  baseURL: "http://localhost:8080",
});

// interceptors -> 요청 보내기 전에 가로채서 header에 accessToken 넣어줌
instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
// 만약에 배포하게 되면
// 배포 url 하나랑 로컬 url 변수로 저장해두고 baseURL에 변수로 불러다가 쓰기
// 그러면 로컬이랑 배포 서버 URL 금방금방 바꿀 수 있겠쥬?
