import React from "react";
import LoginLeft from "../components/Shared/LoginLeft";
import LoginRightSide from "../components/Login/LoginRightSide";

function Login() {
  return (
    <div className="flex flex-row">
      <LoginLeft />
      <LoginRightSide />
    </div>
  );
}

export default Login;
