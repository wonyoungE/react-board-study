import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  /* background-color: aliceblue; */
  padding: 20px;
  box-sizing: border-box;
`;

export const titleContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 12px;
  border-bottom: 2px solid #333;

  & > h1,
  & > div > p {
    margin: 0;
    padding: 0 10px;
  }

  & > div > p {
    font-size: 14px;
  }
`;

export const contentContainer = css`
  margin: 12px 0px;
  padding: 0 10px;
  min-height: 400px;
  font-size: 18px;
  border-bottom: 2px solid #333;
`;

export const buttonContainer = css`
  display: flex;
  justify-content: space-between;

  & button {
    border: 1px solid #333;
    border-radius: 8px;
    background-color: white;
    padding: 6px 12px;
    font-size: 15px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border: 1px solid white;
      background-color: #333;
      color: white;
    }
  }

  & > div {
    display: flex;
    gap: 5px;
  }
`;
