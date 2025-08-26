import { useQuery } from "@tanstack/react-query";
import { getPrincipalRequest } from "../../apis/auth/authApis";
import Header from "../Header/Header";
import * as s from "./styles";

/** @jsxImportSource @emotion/react */
function Layout({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  const { data, isLoading } = useQuery({
    //
    queryKey: ["getPrincipal"], // React Query가 캐싱 관리할 수 있게 해줌, = 캐시에 저장되어있는 이름? 키 값?
    queryFn: getPrincipalRequest, // axios 요청 함수가 들어감
    refetch: 1, // 요청 실패했을 때 얼마나 다시 시도해볼 것인지
    enabled: !!accessToken, // accessToken이 있을 때만 요청
    // accessToken이 null이거나 ""일 때는 요청x, 로그인해서 localStorage에 accessToken이 생기면 바로 실행.
    // 로그아웃해서 accessToken이 없어지면?
    // enabled: false가 되면.. => 1. 데이터 무효화: getPrincipal이라는 키로 캐시된 데이터를 '오래된(state)' 상태로 표시
    // => 2. 데이터 가져오기 중단: 캐시된 데이터가 있더라도 이 데이터를 재검증하거나 백그라운드에서 다시 가져오는 작업 모두 중단
    // => 3. 데이터 초기화: queryClient.removeQueries(["getPrincipal"])로 캐시된 데이터 직접 삭제 가능
  });

  return (
    <div css={s.layout}>
      {isLoading ? (
        <>
          <p>로딩중..</p>
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
