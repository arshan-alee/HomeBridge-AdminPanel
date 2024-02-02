import React, { useEffect, useState } from "react";
import Sidebar from "../components/Shared/Sidebar";
import Header from "../components/Shared/Header";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Loading, setLoading] = useState(false);

  const checkUserToken = () => {
    const Info = localStorage.getItem("info");
    const userToken = JSON.parse(Info)?.token;

    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/");
    }

    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <div className=" h-screen  w-full  ">
          <div className="h-[11vh]">
            <Header />
          </div>
          <div className="flex h-[88.8vh]">
            <Sidebar />
            <div className="w-[80%] overflow-y-auto">{props.children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProtectedRoute;
