import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
`;

export const imgBox = css`
  position: relative;

  & > img {
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 220px;
    height: 220px;
    object-fit: cover;
    background-color: #dbdbdb;
  }

  & > input {
    display: none;
  }
`;

export const imgBtn = css`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 40px;
  height: 40px;
  border: 3px solid white;
  background-color: #bdbdbdff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > svg {
    font-size: 22px;
  }
`;

export const inputBox = css`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  & > input {
    width: 100%;
    outline: none;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
    padding: 10px 16px;
    font-size: 16px;
    box-sizing: border-box;

    &:focus {
      border: 2px solid #333;
    }
  }
`;

export const btnBox = css`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  & > button {
    padding: 0%;
    margin: 0;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    background-color: white;
    padding: 6px 12px;
    font-size: 15px;
    font-weight: 500;
    color: #0d64e6ff;
    cursor: pointer;

    &:hover {
      background-color: #0d64e6ff;
      color: white;
    }
  }
`;
