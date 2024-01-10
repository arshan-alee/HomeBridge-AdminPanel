import React, { useState } from "react";
import Sidebar from "../components/Shared/Sidebar";
import Header from "../components/Shared/Header";

const ProtectedRoute = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn ? (
        <div className=" h-screen  w-full border-2  ">
          <Header/>
          <div className="flex h-[90%]">
          <Sidebar /> 
          <div className="w-[80%] border-2 overflow-y-auto">{props.children}</div>
        </div>
          </div>
      ) : null}
    </>
  );
};

export default ProtectedRoute;
