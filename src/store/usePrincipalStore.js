import { create } from "zustand";

// 쥬스탄드
// 전역 상태, 외부에서 불러쓸 거기 때문에 export
export const usePrincipalState = create((set, get) => ({
  // 초기값 설정
  isLoading: true, // principal api 요청 중?
  isLoggedIn: false,
  principal: null,

  // set 함수 커스텀 가능
  login: (userData) => set({ isLoggedIn: true, principal: userData }),
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ isLoggedIn: false, principal: null });
    window.location.href = "/auth/signin";
  },
  setIsLoading: (status) => set({ isLoading: status }),
  // get : 현재 상태 가져와서 무엇을 해야하면 쓰면 된다.
  // set안에서 쓸 수 있는 것
}));

/**
 * 전역 상태 관리
 * Zustand
 *
 * 전역 상태관리를 사용하는 이유
 * 1. 컴포넌트 간의 상태 공유
 * 2. Props Drilling 방지
 *  - 코드 복잡성 증가
 *  - => 유지보수 어려움
 *  - 불필요한 렌더링 유발 (중간에 필요없는 애들도 재렌더링)
 * 3. 관심사 분리
 * 4. 상태 예측 가능성
 */
