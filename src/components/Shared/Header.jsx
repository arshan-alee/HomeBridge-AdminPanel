import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-16 h-full  shadow-sm border-b-[1px] border-gray-300   ">
      <h1 className="text-lg font-semibold">HOMEBRIDGE</h1>
      <div className="flex justify-start items-center gap-4">
        <img src="/images/user circle.png" alt="logo" />
        <p className="text-lg">Login</p>
      </div>
    </div>
  );
};

export default Header;
