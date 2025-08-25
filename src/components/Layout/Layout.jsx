import { useQuery } from "@tanstack/react-query";
import { getPrincipalRequest } from "../../apis/auth/authApis";
import Header from "../Header/Header";
import * as s from "./styles";

/** @jsxImportSource @emotion/react */
function Layout({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  const { data, isLoading } = useQuery({
    queryKey: ["getPrincipal"],
    queryFn: getPrincipalRequest,
    refetch: 1, // 요청 실패했을 때 얼마나 다시 시도해볼 것인지
    enabled: !!accessToken, // accessToken이 있을 때만 요청
  });

  return (
    <div css={s.layout}>
      {isLoading ? (
        <>
          <p>로딩중</p>
        </>
      ) : (
        <>
          <Header />
          <div css={s.mainContainer}>{children}</div>
        </>
      )}
    </div>
  );
}

export default Layout;
