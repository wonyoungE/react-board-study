import { css } from "@emotion/react";

export const layout = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const mainContainer = css`
  width: 60%;
  height: calc(100vh - 60px); // 뷰포트 높이 중에 헤더 만큼 뺀 영역
`;
