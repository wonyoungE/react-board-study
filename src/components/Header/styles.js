import { css } from "@emotion/react";

export const header = css`
  height: 60px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #f1f1f1ff;
  /* box-shadow: 0px 0px 5px 0px rgba(142, 142, 142, 0.75); */
  border-bottom: 1px solid #dadadaff;
  z-index: 200;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;

    & > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      & > li {
        font-size: 1.2em;
        cursor: pointer;
        transition: all 0.2s ease;

        & > a {
          text-decoration: none;
          color: #333;
        }
      }

      & > li:hover {
        transform: translateY(-2px);
      }
    }

    & > ul:first-of-type {
      font-weight: 500;
    }
  }
`;

export const logo = css`
  font-size: 2em;
  line-height: 2em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    transform: translateY(-2px);
  }
`;

export const headerIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid #333;
  background-color: #ffffff;
  box-sizing: border-box;
`;
