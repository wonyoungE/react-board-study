import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const box = css`
  padding: 30px;
  width: 400px;
  height: 450px;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const inputBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & > input {
    font-size: 16px;
    outline: none;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    padding: 10px 15px;
    color: #333;
    box-sizing: border-box;
  }
`;
