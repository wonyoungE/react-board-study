import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 10px;
`;

export const top = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: 0 -330px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    margin: 10px;

    & > h2 {
      margin: 0;
      padding: 0;
      font-size: 26px;
    }

    & > button {
      padding: 5px 12px;
      font-size: 15px;
      font-weight: 500;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 3px;

      &:hover {
        background-color: #dbdbdb;
      }

      & > svg {
        font-size: 15px;
      }
    }
  }
`;

export const tableContainer = css`
  width: 100%;
  height: 450px;
  overflow-y: auto;
`;

export const boardTable = css`
  width: 100%;
  overflow-y: auto;
  border-collapse: collapse;

  & th {
    border-top: 2px solid #0d64e6ff;
    border-bottom: 1px solid #0d64e6ff;
    background-color: #ffffff; // 배경색 줘야 스크롤되어 올라가는 행들이 안보임
    box-sizing: border-box;
  }

  & th,
  & td {
    padding: 12px 0;
    /* border-bottom: 1px solid #dbdbdb; */
    text-align: center;
  }

  & td:first-of-type {
    width: 70px;
  }

  & td:nth-of-type(2) {
    flex-grow: 1;
    text-align: left;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      font-weight: 500;
    }
  }

  & td:nth-of-type(3) {
    width: 100px;
  }

  & td:last-of-type {
    width: 150px;
  }

  & tbody > tr:nth-of-type(2n + 1) {
    background-color: #f3f3f3ff;
  }
`;
