import { css } from "@emotion/react";

export const container = css`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3px;
`;

export const navBtn = css`
  padding: 0;
  width: 24px;
  height: 24px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: white;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  line-height: 24px;

  &:hover {
    background-color: #0d64e6ff;
    color: white;
  }
`;

export const pageBtn = (isActive) => css`
  padding: 0;
  width: 30px;
  height: 30px;
  font-size: 16px;
  background-color: ${isActive ? "#0d64e6ff" : "white"};
  color: ${isActive ? "white" : "black"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  line-height: 30px;

  &:hover {
    background-color: #0d64e6ff;
    color: white;
  }
`;
