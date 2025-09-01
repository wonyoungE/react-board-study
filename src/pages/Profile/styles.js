import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 200px;
  box-sizing: border-box;
  gap: 20px;
`;

export const profileHeader = css`
  width: 100%;
  height: 200px;
  display: flex;
`;

export const profileImgBox = css`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    width: 180px;
    height: 180px;
    border: 1px solid #dbdbdb;
    background-color: white;
    border-radius: 50%;
    object-fit: cover;
    padding: 0;
    margin: 0;
  }
`;

export const profileInfoBox = css`
  width: 60%;
  padding: 0 10px;
  box-sizing: border-box;
  color: #333;

  & > div {
    display: flex;
    gap: 5px;
  }
`;

export const settingBtn = css`
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
  align-items: center;
  gap: 10px;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    line-height: 16px;

    & > svg {
      font-size: 22px;
    }
  }
`;

export const emailAdmitBtn = css`
  border: 1px solid #dbdbdb;
  background-color: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    /* background-color: #dbdbdb; */
    box-shadow: 0px 0px 2px 0px rgba(168, 168, 168, 0.89);
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

export const profileBox = css`
  width: 100%;
  /* flex-grow: 1; */
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
`;

export const profileTab = (tabChild) => css`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;

  & > ul {
    display: flex;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      padding: 0 14px;
      font-size: 14px;
      border-right: 1px solid #dbdbdb;
      box-sizing: border-box;
      cursor: pointer;

      &:nth-of-type(${tabChild}) {
        border-bottom: 1px solid #ffffff;
      }

      &:hover {
        font-weight: 500;
        background-color: #f2f2f2;
      }
    }
  }
`;

export const profileMain = css`
  width: 100%;
  height: 460px;
`;
