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
  padding-bottom: 15px;
  border-bottom: 1px solid #dbdbdb;

  & > h1,
  & > p {
    margin: 0;
    padding: 0;
  }

  & > p {
    font-size: 14px;
  }
`;

export const contentContainer = css`
  margin-top: 20px;
  min-height: 400px;
  font-size: 18px;
`;

export const buttonContainer = css`
  display: flex;
  justify-content: flex-end;
  gap: 7px;

  & > button {
    border: none;
    font-size: 16px;
    padding: 5px 8px;
    display: flex;
    align-items: center;
    font-weight: 500;
  }
`;
