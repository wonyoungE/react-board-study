import * as s from "./styles";

/** @jsxImportSource @emotion/react */

function Signin() {
  return (
    <div css={s.container}>
      <h1>로그인</h1>
      <div css={s.box}>
        <div css={s.inputBox}>
          <input type="text" placeholder="이름" />
          <input type="password" placeholder="비밀번호" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
