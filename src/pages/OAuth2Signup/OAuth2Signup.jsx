import { useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./styles";
import { useRef, useState, useEffect } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import { oAuth2SignupRequest } from "../../apis/auth/authApis";

/** @jsxImportSource @emotion/react */
function OAuth2Signup() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    setEmail(searchParam.get("email"));
    emailRef.current.disabled = true;
  }, [searchParam]); // 컴포넌트 마운트 시 한 번만 실행

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

  const signupOnClickHandler = () => {
    const newErrors = {};

    if (
      username.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      newErrors.all = "모든 항목을 입력해 주세요.";
      setErrors(newErrors);
      return;
    }

    if (password !== confirmPassword) {
      newErrors.password = "비밀번호를 확인해주세요.";
      setErrors(newErrors);
      passwordRef.current.focus();
      return;
    }
    setErrors(newErrors);

    // 회원가입 요청 API
    oAuth2SignupRequest({
      username: username,
      password: password,
      email: email,
      provider: searchParam.get("provider"),
      providerUserId: searchParam.get("providerUserId"),
    })
      .then((resp) => {
        console.log(resp);
        if (resp.data.status === "success") {
          alert("회원가입 되었습니다.");
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
    <div css={s.container}>
      <h1>회원가입</h1>
      <div css={s.box}>
        <div css={s.inputBox}>
          <AuthInput
            type={"text"}
            placeholder="이름"
            state={username}
            setState={setUsername}
            hasError={!!errors.username || !!errors.all}
            ref={usernameRef}
          />
          <AuthInput
            type={"password"}
            placeholder="비밀번호"
            state={password}
            setState={setPassword}
            hasError={!!errors.password || !!errors.all}
            ref={passwordRef}
          />
          <AuthInput
            type={"password"}
            placeholder="비밀번호 확인"
            state={confirmPassword}
            setState={setconfirmPassword}
            hasError={!!errors.password || !!errors.all}
            ref={confirmPasswordRef}
          />
          <AuthInput
            type="email"
            placeholder="이메일"
            state={email}
            ref={emailRef}
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
        <div css={s.signinBtnBox}>
          <button onClick={signupOnClickHandler}>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default OAuth2Signup;
