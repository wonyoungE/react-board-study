import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const inputBox = css`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > button {
    border: none;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 15px;
    background-color: #0d6efd;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #0e64e6ff;
    }
  }

  & > ul {
    width: 100%;
    list-style: inside;

    & > li {
      padding: 0;
      margin: 0;
      font-size: 12px;
      color: red;
    }
  }
`;
