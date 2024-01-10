import React from "react";

function LoginLeft() {
  return (
    <div
      className="w-[60%]  hidden md:flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh)",
        background:
          "linear-gradient(180deg, #111C44 0%, #111C44 84.79%, #111C44 100%)",
      }}
    >
      <div>
        <h1 className="text-white text-left text-[40px] font-[700]">
          Go HomeBridge
        </h1>
        <p className="text-white text-[18px] font-[500]">
          Find work and residence at the same time at Homebridge.
        </p>
      </div>
      <img
        src="/images/Auth.png"
        alt=""
        className="absolute bottom-0 left-0 w-[300px]"
      />
    </div>
  );
}

export default LoginLeft;
