import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import RequestLoader from "../Shared/RequestLoader";

const LoginRightSide = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(false);
  const [Error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    setError("");
    try {
      const response = await axios.post(`${baseUrl}/api/user/adminLogin`, user);
      if (response?.data?.status) {
        localStorage.setItem("info", JSON.stringify(response.data.user));
        navigate("/admin/dashboard");
      } else if (!response?.data?.status) {
        setError(response?.data?.message);

        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } catch (error) {
      setLoader(true);
      setError(error.message);

      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div
      className="flex items-center justify-center w-full md:w-[40%]"
      style={{ height: "calc(100vh)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 md:p-8 rounded w-96"
      >
        <h2 className="text-3xl mb-2 font-bold">Hello Again!</h2>
        <p className="text-gray-600 mb-6 font-[400]">admin page</p>
        <div>
          <div className="relative mb-3">
            <input
              type="email"
              name="email"
              required
              value={user.email}
              onChange={handleChange}
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
              name="password"
              required
              value={user.password}
              onChange={handleChange}
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
        <button
          className="w-full bg-[#111C44] text-white py-3 rounded-full mt-6 focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loader ? true : false}
        >
          {loader ? <RequestLoader /> : "Login"}
        </button>
        {Error && (
          <div className="text-[#E12F2F] font-medium text-center text-sm mt-3">
            {Error}
          </div>
        )}
        <Link to="/forgot-password">
          <p className="text-center text-[14px] py-2 cursor-pointer">
            Forgot Password
          </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginRightSide;
