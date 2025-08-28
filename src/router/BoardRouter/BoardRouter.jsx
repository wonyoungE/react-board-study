import { Route, Routes } from "react-router-dom";
import Board from "../../pages/Board/Board";
import BoardDetail from "../../pages/BoardDetail/BoardDetail";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import BoardEdit from "../../pages/BoardEdit/BoardEdit";

function BoardRouter() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <ProtectedRoute>
            <Board />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/:boardId"
        element={
          <ProtectedRoute>
            <BoardDetail />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/edit/:boardId"
        element={
          <ProtectedRoute>
            <BoardEdit />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}

export default BoardRouter;
