import { Route, Routes } from "react-router-dom";
import Board from "../../pages/Board/Board";
import BoardDetail from "../../pages/BoardDetail/BoardDetail";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

function BoardRouter() {
  return (
    <Routes>
      <Route
        path="/list"
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
    </Routes>
  );
}

export default BoardRouter;
