/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./styles";
import { LuLogIn, LuLogOut, LuUserRoundPlus } from "react-icons/lu";
import { useQueryClient } from "@tanstack/react-query";
import defaultProfileImg from "../../assets/images/default.png";
import { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsList } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Header() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // // 캐시에 저장되어있는 getPrincipal 가져오기
  const principalData = queryClient.getQueryData(["getPrincipal"]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const profileRef = useRef();
  const menuRef = useRef();

  // 전역 상태
  const { isLoggedIn, principal, logout } = usePrincipalState();
  // 캐시에 저장되어있는 principal의 imgUrl로 헤더에 띄워주니까
  // 프로필 사진 변경했을 때 헤더에 있는 이미지는 안바뀌는 현상 발생
  // 이럴 때 useMutation 사용해서 principalData 무효화하고 다시 발급받는 로직 짜면 됨

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    // 바깥 클릭 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, profileRef]);

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  // const onClickLogout = () => {
  //   localStorage.removeItem("accessToken");
  //   window.location.href = "/auth/signin";
  // };

  const profileImgOnClickHandler = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const menubarOnClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div css={s.header}>
      <div css={s.start}>
        <p css={s.menubar} onClick={menubarOnClickHandler}>
          <BsList />
        </p>
        <p onClick={() => onClickNavHandler("/")}>BOARD</p>
        <div ref={menuRef} css={s.menuDropdown(isMenuOpen)}>
          <ul>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              <div>
                <IoHomeOutline />
                <p>홈</p>
              </div>
            </li>
            <li
              onClick={() => {
                navigate("/board");
              }}
            >
              <div>
                <MdPeopleOutline />
                <p>게시판</p>
              </div>
            </li>
            <li
              onClick={() => {
                navigate("/write");
              }}
            >
              <div>
                <TiPencil />
                <p>글쓰기</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div css={s.center}></div>
      <div css={s.end}>
        {isLoggedIn ? (
          <>
            <img
              css={s.profileImg}
              src={principal ? principal.profileImg : defaultProfileImg}
              alt=""
              onClick={profileImgOnClickHandler}
            />
            <div ref={profileRef} css={s.profileDropdown(isProfileOpen)}>
              <ul>
                <li
                  onClick={() => {
                    setIsProfileOpen(false);
                    navigate(`account/profile/${principal.userId}`);
                  }}
                >
                  <div>
                    <CgProfile />
                    <p>마이 프로필</p>
                  </div>
                </li>
                <li
                  onClick={() => {
                    setIsProfileOpen(false);
                    // onClickLogout();
                    logout();
                  }}
                >
                  <div>
                    <LuLogOut />
                    <p>로그아웃</p>
                  </div>
                </li>
              </ul>
            </div>
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
