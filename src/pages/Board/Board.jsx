/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardListRequest } from "../../apis/board/boardApis";
import { TiPencil } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import image6 from "../../assets/images/6.jpg";
import { useQueryClient } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

function Board() {
  const [message, setMessage] = useState("");
  const [boardList, setBoardList] = useState([]);
  const [currentBoardList, setCurrentBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const amountBoard = 15; // 한 페이지에 보여줄 게시물 수

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // 캐시에 저장되어있는 getPrincipal 가져오기
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  useEffect(() => {
    getBoardListRequest()
      .then((resp) => {
        console.log(resp.data.data);
        if (resp.data.status === "success") {
          // 객체의 배열
          setBoardList(resp.data.data);
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
  }, []);

  useEffect(() => {
    const offset = currentPage * amountBoard;
    const slicedBoard = boardList.slice(offset, offset + amountBoard); // 개수만큼 자르기
    console.log(slicedBoard);
    setCurrentBoardList(slicedBoard);
  }, [currentPage, boardList]);

  const pageOnChangeHandler = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div css={s.container}>
      <div css={s.top}>
        <img src={image6}></img>
        <div>
          <h2>글 목록</h2>
          <button
            onClick={() => {
              if (principalData === undefined) {
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
              {currentBoardList.map((board, index) => {
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
                        navigate(`/profile/${board.user.userId}`);
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
        <ReactPaginate
          pageCount={Math.ceil(boardList.length / amountBoard)}
          onPageChange={pageOnChangeHandler}
          previousLabel={"이전"}
          nextLabel={"다음"}
        />
      </div>
    </div>
  );
}

export default Board;
