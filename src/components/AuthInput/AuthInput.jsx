/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import * as s from "./styles";

const AuthInput = forwardRef(
  ({ type, placeholder, state, setState, hasError }, ref) => {
    const onChangeHandler = (e) => {
      setState(e.target.value);
    };

    return (
      <input
        type={type}
        value={state}
        onChange={onChangeHandler}
        placeholder={placeholder}
        css={s.input(hasError)}
        ref={ref}
      />
    );
  }
);

export default AuthInput;
