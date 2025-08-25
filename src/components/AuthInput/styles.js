import { css } from "@emotion/react";

export const input = (hasError) => css`
  width: 100%;
  font-size: 16px;
  outline: none;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  padding: 12px 15px;
  color: #333;
  box-sizing: border-box;
  transition: all 0.2s ease;

  border-color: ${hasError ? "#e74c3c" : "#dbdbdb"};

  &:focus {
    border: 1px solid #555;
    border-color: ${hasError ? "#e74c3c" : "#555"};
    z-index: 1;
  }
`;
