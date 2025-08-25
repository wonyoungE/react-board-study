import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  box-sizing: border-box;
  gap: 100px;
`;

export const card = css`
  width: 350px;
  height: 300px;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  background-color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  & > h3 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 30px;
  }

  & > p {
    margin: 0;
    font-size: 16px;
    text-align: center;
    word-break: keep-all;
  }
`;
