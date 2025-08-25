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
  align-items: flex-start;
  box-shadow: 0px 0px 5px 0px rgba(142, 142, 142, 0.7);
`;

export const inputBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const signinBtnBox = css`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
  margin: 12px 0 20px;

  & > button {
    width: 100%;
    padding: 11px 30px;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #888;
      font-weight: 600;
      box-shadow: 0px 0px 5px 0px rgba(142, 142, 142, 0.8);
    }
  }
`;

export const oAuthBtnBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* 아이콘-텍스트 간격 */
    width: 100%;
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fff;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    box-sizing: border-box;

    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: #f8f9fa;
      color: #000;
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

export const profileIcon = css``;
