import { useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./styles";
import { useRef, useState, useEffect } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import { oAuth2MergeRequest } from "../../apis/auth/authApis";

/** @jsxImportSource @emotion/react */
function OAuth2Merge() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // DOM 요소에 직접 접근 => useRef
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    const newErrors = {};
    if (password.length > 0) {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

      if (!passwordRegex.test(password)) {
        newErrors.password =
          "최소 8자, 하나의 문자, 숫자 및 특수 문자를 포함해야 합니다.";
      }
    }

    setErrors(newErrors);
  }, [password]);

  const mergeOnClickHandler = () => {
    const newErrors = {};

    if (username.trim() === "" || password.trim() === "") {
      newErrors.all = "모든 항목을 입력해 주세요.";
      setErrors(newErrors);
      return;
    }

    setErrors(newErrors);

    // 회원가입 요청 API
    oAuth2MergeRequest({
      username: username,
      password: password,
      provider: searchParam.get("provider"),
      providerUserId: searchParam.get("providerUserId"),
    })
      .then((resp) => {
        console.log(resp);
        if (resp.data.status === "success") {
          alert("계정 연동 되었습니다. 로그인을 진행해주세요.");
          navigate("/auth/signin");
        } else {
          alert(resp.data.message);
          return;
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        return;
      });
  };

  return (
    <div>
      <div css={s.container}>
        <h1>연동하기</h1>
        <div css={s.box}>
          <div css={s.inputBox}>
            <AuthInput
              type={"text"}
              placeholder={"이름"}
              state={username}
              setState={setUsername}
              hasError={!!errors.username}
              ref={usernameRef}
            />
            <AuthInput
              type={"password"}
              placeholder={"비밀번호"}
              state={password}
              setState={setPassword}
              hasError={!!errors.password}
              ref={passwordRef}
            />
          </div>
          <div css={s.errorBox}>
            {Object.keys(errors).length !== 0 ? (
              <ul>
                {Object.values(errors).map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
          <div css={s.btnBox}>
            <button
              onClick={() => {
                mergeOnClickHandler();
              }}
            >
              연동하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OAuth2Merge;
