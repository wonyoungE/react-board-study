import * as s from "./styles";

/** @jsxImportSource @emotion/react */
function Button({ text }) {
  return <button css={s.button}>{text}</button>;
}

export default Button;
