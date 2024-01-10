import React from "react";
import { Link } from "react-router-dom";

const LoginRightSide = () => {
  return (
    <div
      className="flex items-center justify-center w-full md:w-[40%]"
      style={{ height: "calc(100vh)" }}
    >
      <div className="bg-white p-4 md:p-8 rounded w-96">
        <h2 className="text-3xl mb-2 font-bold">Hello Again!</h2>
        <p className="text-gray-600 mb-6 font-[400]">admin page</p>
        <div>
          <div className="relative mb-3">
            <input
              type="email"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
            />
            <img
              src="/icons/mail.png"
              alt="icon"
              className="absolute left-3 top-2 text-gray-500"
            />
          </div>
          <div className="relative mb-3">
            <input
              type="password"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <img
              src="/icons/lock.png"
              alt="icon"
              className="absolute left-3 top-2 text-gray-500"
            />
          </div>
        </div>
        <button className="w-full bg-[#111C44] text-white py-3 rounded-full mt-6 focus:outline-none focus:shadow-outline">
          Login
        </button>
        <Link to="/forgot-password">
          <p className="text-center text-[14px] py-2 cursor-pointer">
            Forgot Password
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LoginRightSide;
