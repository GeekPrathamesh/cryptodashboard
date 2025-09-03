import React, { useContext } from "react";
import { Usercontext } from "../contextapi/Usercontext";
import { Navigate } from "react-router-dom";

const Protectedroutes = ({ children }) => {
  const { token, loading } = useContext(Usercontext);

  if (loading) {
    return <div>Loading...</div>; // ✅ Show loading instead of redirecting too early
  }

  return token ? children : <Navigate to="/login" replace />;
};

export default Protectedroutes;
