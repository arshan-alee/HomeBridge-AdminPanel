import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const checkUserToken = () => {
    const Info = localStorage.getItem("info");
    const userToken = JSON.parse(Info)?.token;

    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      // return navigate("/");
    }

    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, []);
  return (
    <div className="flex justify-between items-center px-16 h-full  shadow-sm border-b-[1px] border-gray-300   ">
      <h1 className="text-lg font-semibold">HOMEBRIDGE</h1>
      <div className="flex justify-start items-center gap-4">
        <img src="/images/user circle.png" alt="logo" />
        {isLoggedIn ? (
          <p
            className="text-lg cursor-pointer"
            onClick={() => {
              localStorage.removeItem("info");
              navigate("/");
            }}
          >
            Logout
          </p>
        ) : (
          <p className="text-lg cursor-pointer">Login</p>
        )}
      </div>
    </div>
  );
};

export default Header;
