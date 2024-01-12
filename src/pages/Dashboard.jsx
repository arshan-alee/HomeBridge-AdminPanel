import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import BarChart from "../components/Shared/BarChart";
import LineChart from "../components/Shared/LineChart";

const Dashboard = () => {
  return (
    <div className="w-full overflow-y-hidden py-6 pl-3 pr-5">
      {/* 1st Row */}
      <div className=" gap-3 w-full grid grid-cols-6">
        {/* Left */}
        <div className="col-span-4 rounded-[20px] bg-[#111C44] pt-10 pb-3 px-12">
          <div className="flex justify-between items-center">
            <p className="text-[#A3AED0] font-medium text-[14px]">회원수</p>
            <div className="relative cursor-pointer z-20 inline-block">
              <select
                name=""
                id=""
                className="text-[#A3AED0] cursor-pointer relative z-20 inline-flex appearance-none bg-transparent py-1  pr-8 text-sm font-medium outline-none"
              >
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </select>
              <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                <FaCaretDown className="text-[#A3AED0]" />
              </span>
            </div>
          </div>

          <h1 className="text-[34px] text-[#fff] font-bold mb-3">
            2.579 <span className="text-[#A3AED0] text-[14px]">유저</span>
          </h1>

          <BarChart />
        </div>
        {/* Right */}
        <div className="col-span-2 rounded-[20px] bg-[#111C44] py-7 px-8">
          <div className="flex justify-between items-center">
            <p className="text-[#fff] font-bold text-[16px]">유저 Data</p>
            <div className="relative cursor-pointer z-20 inline-block">
              <select
                name=""
                id=""
                className="text-[#A3AED0] cursor-pointer relative z-20 inline-flex appearance-none bg-transparent py-1 pr-8 text-sm font-medium outline-none"
              >
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </select>
              <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                <FaCaretDown className="text-[#A3AED0]" />
              </span>
            </div>
          </div>

          <div className="grid gap-5 mt-3 w-full grid-col-1">
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">오늘 가입회원</p>
              <h1 className="text-[18px] text-[#fff] font-bold">20명</h1>
            </div>
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">이번달 가입회원</p>
              <h1 className="text-[18px] text-[#fff] font-bold">277명</h1>
            </div>
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">올해 가입회원</p>
              <h1 className="text-[18px] text-[#fff] font-bold">3423명</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Row */}
      <div className=" gap-3 my-7 w-full grid grid-cols-6">
        {/* Left */}
        <div className="col-span-2 rounded-[20px] bg-[#111C44] py-7 px-8">
          <div className="flex justify-between items-center">
            <p className="text-[#fff] font-bold text-[16px]">Data</p>
            <div className="relative cursor-pointer z-20 inline-block">
              <select
                name=""
                id=""
                className="text-[#A3AED0] cursor-pointer relative z-20 inline-flex appearance-none bg-transparent py-1 pr-8 text-sm font-medium outline-none"
              >
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </select>
              <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                <FaCaretDown className="text-[#A3AED0]" />
              </span>
            </div>
          </div>

          <div className="grid gap-5 mt-3 w-full grid-col-1">
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">F-2-R 신청자</p>
              <h1 className="text-[18px] text-[#fff] font-bold">20명</h1>
            </div>
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">Job&House</p>
              <h1 className="text-[18px] text-[#fff] font-bold">77건</h1>
            </div>
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">Event</p>
              <h1 className="text-[18px] text-[#fff] font-bold">34건</h1>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-4 rounded-[20px] bg-[#111C44] pt-10 pb-3 px-12">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <div className="flex justify-start items-center gap-3">
                <span className="p-[2px] flex justify-center items-center text-[#fff] rounded-full bg-[#7551FF]">
                  <IoCheckmark className="text-[18px] font-bold" />
                </span>{" "}
                <span className="text-[#7551FF] font-bold text-[18px]">
                  F-2-R 신청자
                </span>
              </div>
              <div className="flex justify-start items-center gap-3">
                <span className="p-[2px] flex justify-center items-center text-[#fff] rounded-full bg-[#EF39FF]">
                  <IoCheckmark className="text-[18px] font-bold" />
                </span>{" "}
                <span className="text-[#EF39FF] font-bold text-[18px]">
                  Job&House
                </span>
              </div>
              <div className="flex justify-start items-center gap-3">
                <span className="p-[2px] flex justify-center items-center text-[#fff] rounded-full bg-[#39B8FF]">
                  <IoCheckmark className="text-[18px] font-bold" />
                </span>{" "}
                <span className="text-[#39B8FF] font-bold text-[18px]">
                  Event
                </span>
              </div>
            </div>
            <div className="relative cursor-pointer z-20 inline-block">
              <select
                name=""
                id=""
                className="text-[#A3AED0] cursor-pointer relative z-20 inline-flex appearance-none bg-transparent py-1  pr-8 text-sm font-medium outline-none"
              >
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </select>
              <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                <FaCaretDown className="text-[#A3AED0]" />
              </span>
            </div>
          </div>
          <LineChart />
        </div>
      </div>

      {/* 3rd Row */}
      <div className="py-7 pl-6 pr-16 flex justify-between items-start rounded-[20px] bg-[#111C44]">
        <p className="text-[#fff]">결제</p>

        <div className="flex justify-center items-center gap-10">
          <div className="flex w-[270px] justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
            <p className="text-[12px] text-[#A3AED0]">F-2-R 신청자</p>
            <h1 className="text-[18px] text-[#fff] font-bold">20명</h1>
          </div>
          <div className="flex w-[270px] justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
            <p className="text-[12px] text-[#A3AED0]">Job&House</p>
            <h1 className="text-[18px] text-[#fff] font-bold">77건</h1>
          </div>
        </div>

        <div className="relative cursor-pointer z-20 inline-block">
          <select
            name=""
            id=""
            className="text-[#A3AED0] cursor-pointer relative z-20 inline-flex appearance-none bg-transparent py-1  pr-8 text-sm font-medium outline-none"
          >
            <option value="">Monthly</option>
            <option value="">Yearly</option>
          </select>
          <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
            <FaCaretDown className="text-[#A3AED0]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
