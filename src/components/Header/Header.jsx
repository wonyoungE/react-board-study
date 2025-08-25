/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from "react-router-dom";
import * as s from "./styles";
import { LuLogIn, LuLogOut, LuUserRoundPlus } from "react-icons/lu";
import { useQueryClient } from "@tanstack/react-query";
import { GoPerson } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/auth/signin";
  };

  return (
    <div css={s.header}>
      <div css={s.logo} onClick={() => onClickNavHandler("/")}>
        BOARD
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/board"}>게시판</Link>
          </li>
          <li>
            <Link to={"/write"}>글쓰기</Link>
          </li>
        </ul>
      </div>
      <div css={s.profile}>
        {principalData ? (
          <>
            <ul>
              <li css={s.headerIcon}>
                <IoPersonOutline />
              </li>
              <li css={s.headerIcon} onClick={onClickLogout}>
                <LuLogOut />
              </li>
            </ul>
          </>
        ) : (
          <ul>
            <li
              css={s.headerIcon}
              onClick={() => onClickNavHandler("/auth/signin")}
            >
              <LuLogIn />
            </li>
            <li
              css={s.headerIcon}
              onClick={() => onClickNavHandler("/auth/signup")}
            >
              <LuUserRoundPlus />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
