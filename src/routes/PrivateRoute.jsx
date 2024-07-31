/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
}

export default PrivateRoute;
