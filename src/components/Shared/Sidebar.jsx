import React, { useState } from "react";
import { routes } from "../../utils/Routes";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("null");
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item, path) => {
    // setActiveItem(index);
    // navigate(path); // Navigate to the selected route
    navigate("/admin/" + path);
  };

  return (
    <div className="w-[18%] h-full bg-[#111C44] flex flex-col  gap-4 overflow-y-auto">
      <div className="mt-[100px]"></div>
      <span
        className="w-full h-[1px]"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
        }}
      ></span>
      <div
        className={`flex gap-5 items-center border-solid bottom-2 py-1 pl-7 ${
          location.pathname === "/admin/dashboard" &&
          "border-r-4 border-[#7551FF]"
        } cursor-pointer`}
        onClick={() => handleNavigation("Dashboard", "dashboard")}
      >
        <img src="/images/home.png" className="" />
        <p className="text-white">Dashboard</p>
      </div>

      <div
        className={`flex gap-5 items-center border-solid bottom-2 py-1 pl-7 ${
          location.pathname === "/admin/membership" &&
          "border-r-4 border-[#7551FF]"
        } cursor-pointer`}
        onClick={() => handleNavigation("회원관리", "membership")}
      >
        <img src="/images/user_signout.png" className="" />
        <p className="text-white">회원관리</p>
      </div>

      <div
        className={`flex gap-5 items-center border-solid bottom-2 py-1 pl-7 ${
          location.pathname === "/admin/f_2_r" && "border-r-4 border-[#7551FF]"
        } cursor-pointer`}
        onClick={() => handleNavigation("F-2-R", "f_2_r")}
      >
        <img src="/images/F2R.png" className="" />
        <p className="text-white">F-2-R</p>
      </div>

      <div
        className={`flex gap-5 items-center border-solid bottom-2 py-1 pl-7 ${
          location.pathname === "/admin/job_house_support" &&
          "border-r-4 border-[#7551FF]"
        } cursor-pointer`}
        onClick={() => handleNavigation("Job&House", "job_house_support")}
      >
        <img src="/images/Job&House.png" className="" />
        <p className="text-white">Job&House</p>
      </div>

      <div
        className={`flex gap-5 items-center border-solid bottom-2 py-1 pl-7 ${
          location.pathname === "/admin/event_application_list" &&
          "border-r-4 border-[#7551FF]"
        } cursor-pointer`}
        onClick={() => handleNavigation("event", "event_application_list")}
      >
        <img src="/images/lock.png" className="" />
        <p className="text-white pl-1">event</p>
      </div>

      <div
        className={`flex gap-5 items-center border-solid bottom-2 py-1 pl-7 ${
          location.pathname === "/admin/payments" &&
          "border-r-4 border-[#7551FF]"
        } cursor-pointer`}
        onClick={() => handleNavigation("결제내역", "payments")}
      >
        <img src="/images/cart.png" className="" />
        <p className="text-white">결제내역</p>
      </div>

      <div
        className={`flex gap-5 items-center border-solid bottom-2 py-1 pl-7 ${
          location.pathname === "/admin/inquiry" &&
          "border-r-4 border-[#7551FF]"
        } cursor-pointer`}
        onClick={() => handleNavigation("문의내역", "inquiry")}
      >
        <img src="/images/info_outline.png" className="" />
        <p className="text-white">문의내역</p>
      </div>
    </div>
  );
};

export default Sidebar;
