import { useQueryClient } from "@tanstack/react-query";

function ProtectedRoute({ children }) {
  const queryClient = useQueryClient();
  // 캐시에 저장되어있는 getPrincipal 가져오기
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  // 조건 다르게 줘서 관리자 페이지 접근 금지같은 거..
  if (principalData === undefined) {
    alert("로그인이 필요합니다.");
    window.location.href = "/auth/signin";
    return;
  }
  return children;
}

export default ProtectedRoute;
