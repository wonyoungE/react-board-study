import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
export const tableContainer = css`
  width: 100%;
  box-sizing: border-box;
`;

export const boardTable = css`
  width: 100%;
  border-collapse: collapse;
  color: #333;
  box-sizing: border-box;
  font-size: 15px;

  & th {
    border-bottom: 1px solid #f2f2f2;
    background-color: #ffffff; // 배경색 줘야 스크롤되어 올라가는 행들이 안보임
  }

  & th,
  & td {
    padding: 7px 0;
    /* border-bottom: 1px solid #dbdbdb; */
    text-align: center;
    box-sizing: border-box;
  }

  & td:first-of-type {
    width: 50px;
  }

  & td:nth-of-type(2) {
    flex-grow: 1;
    text-align: left;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
      text-decoration: underline;
      font-weight: 500;
    }
  }

  & td:nth-of-type(3) {
    width: 120px;
    transition: all 0.2s ease;
  }

  & tbody > tr:nth-of-type(2n + 1) {
    background-color: #f3f3f3ff;
  }
`;
