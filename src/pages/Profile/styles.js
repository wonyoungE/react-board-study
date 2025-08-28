import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  box-sizing: border-box;
  gap: 20px;
`;

export const top = css`
  width: 100%;
  height: 200px;
  display: flex;
  /* padding: 10px 0; */
  border-bottom: 1px solid #dbdbdb;
`;

export const leftBox = css`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 180px;
    height: 180px;
    border: 1px solid #dbdbdb;
    background-color: white;
    border-radius: 50%;
    object-fit: fill;
    padding: 0;
    margin: 0;
  }
`;

export const rightBox = css`
  width: 60%;

  & > div {
    display: flex;
    gap: 5px;

    & > button {
      display: inline-block;
      border: none;
      background-color: transparent;
      box-sizing: border-box;

      & > svg {
        padding: 0;
        margin: 0;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
`;

export const username = css`
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 500;
`;

export const email = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  line-height: 16px;

  & > svg {
    font-size: 22px;
  }
`;

export const createDt = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  line-height: 16px;

  & > svg {
    font-size: 22px;
  }
`;

export const bottom = css`
  width: 100%;

  & > ul {
    display: flex;
    gap: 10px;
  }
`;
