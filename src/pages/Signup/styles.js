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
  /* border: 1px solid #b6b6b6; */
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 0px rgba(142, 142, 142, 0.7);
`;

export const inputBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  gap: 8px;
`;

export const btnBox = css`
  width: 100%;

  & > button {
    width: 100%;
    padding: 11px 30px;
    border: none;
    border-radius: 8px;
    background-color: #0d6efd;
    font-size: 15px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 10px;

    &:hover {
      background-color: #0d64e6ff;
      font-weight: 600;
      box-shadow: 0px 0px 5px 0px rgba(142, 142, 142, 0.8);
    }
  }
`;

export const errorBox = css`
  & > ul {
    list-style: inside;
    & > li {
      padding: 0;
      margin: 0;
      font-size: 12px;
      color: red;
    }
  }
`;
