/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardListRequest } from "../../apis/board/boardApis";
import { TiPencil } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import image6 from "../../assets/images/6.jpg";
import { useQueryClient } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import Pagination from "../../components/Pagination/Pagination";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Board() {
  const [message, setMessage] = useState("");
  const [boardList, setBoardList] = useState([]);
  // const [currentBoardList, setCurrentBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const amountBoard = 15; // 한 페이지에 보여줄 게시물 수

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // 캐시에 저장되어있는 getPrincipal 가져오기
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  const { isLoggedIn, principal } = usePrincipalState();

  useEffect(() => {
    // 만약에 게시글이 10000개라면... 처음 15개 불러오는데도 10000개 다 불러와야함;;
    // 10000개 다 불러온다 쳐도.. 10000개 전부를 boardList 상태에?
    // 거기다가 최신 데이터 갱신도 불가능..
    getBoardListRequest(currentPage, amountBoard)
      .then((resp) => {
        if (resp.data.status === "success") {
          // 객체의 배열
          setBoardList(resp.data.data.boardList);
          setTotalPages(resp.data.data.totalPages);
        } else if (resp.data.status === "failed") {
          setMessage(resp.data.message);
          setBoardList([]);
          return;
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        return;
      });
  }, [currentPage]);

  // useEffect(() => {
  // const offset = currentPage * amountBoard; // 현재 페이지의 가장 첫번째가 되는 게시물의 인덱스
  // const slicedBoard = boardList.slice(offset, offset + amountBoard); // 개수만큼 자르기
  // console.log(slicedBoard);
  // setCurrentBoardList(slicedBoard);
  // }, [currentPage, boardList]);

  // const pageOnChangeHandler = (e) => {
  //   setCurrentPage(e.selected);
  // };

  return (
    <div css={s.container}>
      <div css={s.top}>
        <img src={image6}></img>
        <div>
          <h2>글 목록</h2>
          <button
            onClick={() => {
              if (!isLoggedIn) {
                alert("로그인이 필요합니다.");
                window.location.href = "/auth/signin";
                return;
              } else {
                navigate("/write");
                return;
              }
            }}
          >
            <TiPencil /> 글쓰기
          </button>
        </div>
      </div>
      <div css={s.tableContainer}>
        {boardList.length === 0 ? (
          <p>{message}</p>
        ) : (
          <table css={s.boardTable}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {boardList.map((board, index) => {
                const boardNumber = currentPage * amountBoard + index + 1;
                return (
                  <tr key={board.boardId}>
                    <td>{boardNumber}</td>
                    <td
                      onClick={() => {
                        navigate(`/board/${board.boardId}`);
                      }}
                    >
                      {board.title}
                    </td>
                    <td
                      onClick={() => {
                        navigate(`/account/profile/${board.user.userId}`);
                      }}
                    >
                      {board.user.username}
                      <p>프로필 보기</p>
                    </td>
                    <td>{board.createDt.split("T")[0]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {/* 페이지네이션 */}
      {/* 원래는 이렇게 하면 안됨 */}
      {/* 페이지네이션할 때 마다 전체 불러와서 리소스 낭비임 */}
      {/* 프로젝트 할 때는 백엔드에 쿼리문 짤 때 그렇게 해라 */}
      <div css={s.paginateContainer}>
        {/* <ReactPaginate
          pageCount={totalPages}
          onPageChange={pageOnChangeHandler}
          previousLabel={"이전"}
          nextLabel={"다음"}
        /> */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Board;
