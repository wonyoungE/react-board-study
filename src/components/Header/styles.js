import { css } from "@emotion/react";

export const header = css`
  height: 60px;
  width: 100%;
  padding: 0 20px;
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

export const start = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: 500;
  gap: 10px;
  position: relative;

  & > p {
    margin: 0;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      transform: translateY(-2px);
    }
  }
`;

export const menubar = css``;

export const menuDropdown = (isOpen) => css`
  display: ${isOpen ? "block" : "none"};
  width: 120px;
  position: absolute;
  top: 105%;
  left: 0;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(142, 142, 142, 0.7);
  border-radius: 8px;
  padding: 10px 0;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 500;

  & > ul {
    display: flex;
    flex-direction: column;

    & > li {
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: #efefef;
      }

      & > div {
        padding: 5px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
`;

export const center = css``;

export const end = css`
  width: 40px;
  height: 40px;
  position: relative;
`;

export const profileDropdown = (isOpen) => css`
  display: ${isOpen ? "block" : "none"};
  width: 130px;
  position: absolute;
  top: 115%;
  right: 0;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(142, 142, 142, 0.7);
  border-radius: 8px;
  padding: 10px 0;
  box-sizing: border-box;

  & > ul {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;

    & > li {
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: #efefef;
      }

      & > div {
        padding: 5px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
`;

export const profileImg = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #333;
  cursor: pointer;
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
