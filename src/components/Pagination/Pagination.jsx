/** @jsxImportSource @emotion/react */
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import * as s from "./styles";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageLimit = 5; // 한 번에 보여줄 페이지 버튼 수

  // 현재 페이지가 속한 그룹 계산
  // 0-4 페이지 사이면 currentGroup은 0
  const currentGroup = Math.floor(currentPage / pageLimit);
  // 현재 그룹의 첫번째 페이지 계산
  const startPage = currentGroup * pageLimit;
  // 현재 그룹의 마지막 페이지 계산, totalPages 넘으면 안됨
  const endPage = Math.min(startPage + pageLimit, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i < endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div css={s.container}>
      <button
        css={s.navBtn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <GrFormPrevious />
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          css={s.pageBtn(currentPage === number)}
        >
          {number + 1}
        </button>
      ))}
      <button
        css={s.navBtn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        <GrFormNext />
      </button>
    </div>
  );
}

export default Pagination;
