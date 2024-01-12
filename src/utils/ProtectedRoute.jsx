import React, { useState } from "react";
import Sidebar from "../components/Shared/Sidebar";
import Header from "../components/Shared/Header";

const ProtectedRoute = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn ? (
        <div className=" h-screen  w-full  ">
          <div className="h-[11vh]">
            <Header />
          </div>
          <div className="flex h-[89vh]">
            <Sidebar />
            <div className="w-[80%] overflow-y-auto">{props.children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProtectedRoute;
