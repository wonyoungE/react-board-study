import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: calc(100% - 60px);
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 20px;
    opacity: 0.7;
  }
`;
