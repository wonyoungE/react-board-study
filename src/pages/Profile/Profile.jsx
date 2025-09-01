/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getUserByUserId } from "../../apis/user/userApis";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MdOutlineCalendarToday, MdOutlineEmail } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";
import { CiSettings } from "react-icons/ci";
import defaultProfileImg from "../../assets/images/default.png";
import ProfileBoard from "../MyBoard/MyBoard";
import ChangePw from "../ChangePw/ChangePw";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Profile() {
  const { userId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [curView, setCurView] = useState("myboard");
  const [tabChild, setTabChild] = useState(1);
  // const queryClient = useQueryClient();
  // // 캐시에 저장되어있는 getPrincipal 가져오기
  // const principalData = queryClient.getQueryData(["getPrincipal"]);

  const { isLoggedIn, principal } = usePrincipalState();

  const tabClickHandler = (path) => {
    // navigate(`${pathname}?tab=${path}`);
    setCurView(path);
    setTabChild(path === "myboard" ? 1 : 2);
  };

  useEffect(() => {
    getUserByUserId(userId)
      .then((resp) => {
        if (resp.data.status === "success") {
          setUserInfo(resp.data.data);
        } else if (resp.data.status === "failed") {
          alert(resp.data.message);
          return;
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        return;
      });
  }, []);

  return (
    <div css={s.container}>
      <div css={s.profileHeader}>
        <div css={s.profileImgBox}>
          <img
            src={userInfo.profileImg ? userInfo.profileImg : defaultProfileImg}
            alt="프로필 이미지"
          />
        </div>
        <div css={s.profileInfoBox}>
          <div>
            <h2 css={s.username}>{userInfo.username}</h2>
            {principal?.userId === userInfo.userId ? (
              <button
                css={s.settingBtn}
                onClick={() => {
                  navigate(`/account/edit/${userInfo.userId}`);
                }}
              >
                <CiSettings />
              </button>
            ) : (
              <></>
            )}
          </div>
          <div css={s.email}>
            <div>
              <MdOutlineEmail /> <span>{userInfo.email}</span>
            </div>
            {principal?.authorities[0].authority === "ROLE_TEMPORARY" ? (
              <button css={s.emailAdmitBtn}>인증하기</button>
            ) : (
              <></>
            )}
          </div>
          <div css={s.createDt}>
            <MdOutlineCalendarToday />
            <span>{userInfo.createDt?.split("T")[0]}</span>
          </div>
        </div>
      </div>
      <div css={s.profileBox}>
        <div css={s.profileTab(tabChild)}>
          <ul>
            <li
              onClick={() => {
                tabClickHandler("myboard");
              }}
            >
              내 게시물
            </li>
            <li
              onClick={() => {
                tabClickHandler("changePw");
              }}
            >
              비밀번호 변경
            </li>
          </ul>
        </div>
        <div css={s.profileMain}>
          {curView === "myboard" ? <ProfileBoard /> : <ChangePw />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
