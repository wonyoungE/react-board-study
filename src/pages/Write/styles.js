import { css } from "@emotion/react";

export const container = css`
  width: 700px;
  min-height: 500px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px 0px rgba(142, 142, 142, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const title = css`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 18px;
  color: #333;

  &:focus {
    outline: 2px solid #555;
  }
`;

export const content = css`
  width: 100%;
  height: calc(500px - 40px - 40px);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 10px 15px;
  border: 1px solid #dbdbdb;
  resize: none;
  font-size: 16px;
  color: #333;
  font-family: inherit;
  margin-bottom: 12px;
  overflow-y: auto;

  &:focus {
    outline: 2px solid #555;
  }
`;

export const btnBox = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > button {
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.2 ease;
    background-color: #0d62fd;
    color: white;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;

    &:hover {
      font-weight: 500;
      background-color: white;
      color: #0d62fd;
    }
  }
`;
