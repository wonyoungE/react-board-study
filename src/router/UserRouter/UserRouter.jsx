import { Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import ProfileEdit from "../../pages/ProfileEdit/ProfileEdit";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

function UserRouter() {
  return (
    <Routes>
      <Route path="/:userId" element={<Profile />} />

      <Route
        path="/edit/:userId"
        element={
          <ProtectedRoute>
            <ProfileEdit />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default UserRouter;
