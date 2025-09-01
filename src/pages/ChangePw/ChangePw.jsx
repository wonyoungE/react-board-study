/** @jsxImportSource @emotion/react */
import { useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";

function ChangePw() {
  const [password, setPassword] = useState("");
  const [newPw, setNewPw] = useState("");
  const [newPwConfirm, setNewPwConfirm] = useState("");

  const onClickHandler = () => {
    console.log("버튼 누름");
  };
  return (
    <div css={s.container}>
      <div css={s.inputBox}>
        <AuthInput
          type={"password"}
          placeholder={"현재 비밀번호"}
          state={password}
          setState={setPassword}
        />
        <AuthInput
          type={"password"}
          placeholder={"새 비밀번호"}
          state={newPw}
          setState={setNewPw}
        />
        <AuthInput
          type={"password"}
          placeholder={"새 비밀번호 확인"}
          state={newPwConfirm}
          setState={setNewPwConfirm}
        />
        <button onClick={onClickHandler}>비밀번호 변경</button>
      </div>
    </div>
  );
}

export default ChangePw;
