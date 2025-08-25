import { useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./styles";

/** @jsxImportSource @emotion/react */
function OAuth2() {
  const navigate = useNavigate();
  // url로 넘어온 사용자 정보도 넘겨줘야 함
  const [searchParam] = useSearchParams();

  return (
    <div css={s.container}>
      <div
        css={s.card}
        onClick={() => {
          navigate(
            `/auth/oauth2/signup?provider=${searchParam.get(
              "provider"
            )}&providerUserId=${searchParam.get(
              "providerUserId"
            )}&email=${searchParam.get("email")}`
          );
        }}
      >
        <h3>새로 가입하기</h3>
        <p>
          신규 회원이라면, 지금 사용하는 소셜 계정으로 새 계정을 만들 수
          있습니다.
        </p>
      </div>
      <div
        css={s.card}
        onClick={() => {
          navigate(
            `/auth/oauth2/merge?provider=${searchParam.get(
              "provider"
            )}&providerUserId=${searchParam.get(
              "providerUserId"
            )}&email=${searchParam.get("email")}`
          );
        }}
      >
        <h3>소셜 로그인 연동하기</h3>
        <p>기존 회원이라면, 해당 계정과 소셜 계정을 연동할 수 있습니다.</p>
      </div>
    </div>
  );
}

export default OAuth2;
