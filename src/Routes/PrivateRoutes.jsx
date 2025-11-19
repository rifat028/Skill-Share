import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { HashLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <div className="h-50 flex justify-center items-center">
        <HashLoader />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/log-in"></Navigate>;
};

export default PrivateRoutes;
