import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import BarChart from "../components/Shared/BarChart";
import LineChart from "../components/Shared/LineChart";
import { GetAllData } from "../axios/NetworkCall";

const Loader = () => {
  return (
    <div className="border-2 border-r-0 border-b-0  animate-spin rounded-full   border-[#fff] h-4 w-4"></div>
  );
};

const Dashboard = () => {
  const [loader, setLoader] = useState();
  const [data, setData] = useState({});
  const [Error, setError] = useState();
  const [selectedOptionData, setSelectedOptionData] = useState("Monthly");

  const [selectedGeneralData, setSelectedGeneralData] = useState("Monthly");
  const [selectedChartData, setSelectedChartData] = useState("Monthly");
  const [selectedPaymentData, setSelectedPaymentData] = useState("Monthly");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoader(true);
      const response = await GetAllData(`/api/getAllCounters`);

      if (response.success) {
        setData(response.data);
      } else {
        setError(response.message);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoader(false);
    }
  };

  const getCountData = (type) => {
    let optionData = "Monthly";

    switch (type) {
      case "F2R":
      case "Job&House":
      case "Event":
        optionData = selectedGeneralData;
        break;
      case "Payment":
        optionData = selectedPaymentData;
        break;
      default:
        return 0;
    }

    switch (type) {
      case "F2R":
        return optionData === "Today"
          ? data?.dailyF2RApplications
          : optionData === "Monthly"
          ? data?.monthlyF2RApplications
          : data?.yearlyF2RApplications;
      case "Job&House":
        return optionData === "Today"
          ? data?.dailyJobHousesApplications
          : optionData === "Monthly"
          ? data?.monthlyJobHousesApplications
          : data?.yearlyJobHousesApplications;
      case "Event":
        return optionData === "Today"
          ? data?.dailyEventApplications
          : optionData === "Monthly"
          ? data?.monthlyEventApplications
          : data?.yearlyEventApplications;
      case "Payment":
        return optionData === "Today"
          ? data?.dailyPaymentSum
          : optionData === "Monthly"
          ? data?.monthlyPaymentSum
          : data?.yearlyPaymentSum;
      default:
        return 0;
    }
  };

  return (
    <div className="w-full overflow-y-hidden py-6 pl-3 pr-5">
      {/* 1st Row */}
      <div className=" gap-3 w-full grid grid-cols-6">
        {/* Left */}
        <div className="col-span-4 rounded-[20px] bg-[#111C44] pt-10 pb-3 px-12">
          <div className="flex justify-between items-center">
            <p className="text-[#A3AED0] font-medium text-[14px]">회원수</p>
            {/* <div className="relative cursor-pointer z-20 inline-block">
              <select
                name="users"
                id="users"
                className="text-[#A3AED0] cursor-pointer relative z-20 inline-flex appearance-none bg-transparent py-1  pr-8 text-sm font-medium outline-none"
              >
                <option value="Today">Today</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                <FaCaretDown className="text-[#A3AED0]" />
              </span>
            </div> */}
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
          </div>

          <div className="grid gap-5 mt-3 w-full grid-col-1">
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">오늘 가입회원</p>
              {loader ? (
                <Loader />
              ) : (
                <h1 className="text-[18px] text-[#fff] font-bold">
                  {data?.dailyUsers} 명
                </h1>
              )}
            </div>
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">이번달 가입회원</p>
              {loader ? (
                <Loader />
              ) : (
                <h1 className="text-[18px] text-[#fff] font-bold">
                  {data?.monthlyUsers} 명
                </h1>
              )}
            </div>
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">올해 가입회원</p>
              {loader ? (
                <Loader />
              ) : (
                <h1 className="text-[18px] text-[#fff] font-bold">
                  {data?.yearlyUsers} 명
                </h1>
              )}
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
                onChange={(e) => setSelectedGeneralData(e.target.value)}
                value={selectedGeneralData}
                name="general"
                id="general"
                className="text-[#A3AED0] cursor-pointer relative z-20 inline-flex appearance-none bg-transparent py-1 pr-8 text-sm font-medium outline-none"
              >
                <option value="Today">Today</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                <FaCaretDown className="text-[#A3AED0]" />
              </span>
            </div>
          </div>

          <div className="grid gap-5 mt-3 w-full grid-col-1">
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">F-2-R 신청자</p>
              {loader ? (
                <Loader />
              ) : (
                <h1 className="text-[18px] text-[#fff] font-bold">
                  {getCountData("F2R")} 건
                </h1>
              )}
            </div>
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">Job&House 신청자</p>
              {loader ? (
                <Loader />
              ) : (
                <h1 className="text-[18px] text-[#fff] font-bold">
                  {getCountData("Job&House")} 건
                </h1>
              )}
            </div>
            <div className="flex justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
              <p className="text-[12px] text-[#A3AED0]">Event 신청자</p>
              {loader ? (
                <Loader />
              ) : (
                <h1 className="text-[18px] text-[#fff] font-bold">
                  {getCountData("Event")} 건
                </h1>
              )}
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
                onChange={(e) => setSelectedChartData(e.target.value)}
                value={selectedChartData}
                name="general_chart"
                id="general_chart"
                className="text-[#A3AED0] cursor-pointer relative z-20 inline-flex appearance-none bg-transparent py-1  pr-8 text-sm font-medium outline-none"
              >
                <option value="Today">Today</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
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
            <p className="text-[12px] text-[#A3AED0]">결제 수</p>
            {loader ? (
              <Loader />
            ) : (
              <h1 className="text-[18px] text-[#fff] font-bold">
                {getCountData("Event")} 명
              </h1>
            )}
          </div>
          <div className="flex w-[270px] justify-between items-center rounded-[15px] bg-[#1B254B] py-6 px-8">
            <p className="text-[12px] text-[#A3AED0]">결제금액</p>
            {loader ? (
              <Loader />
            ) : (
              <h1 className="text-[18px] text-[#fff] font-bold">
                {getCountData("Payment")} KRW
              </h1>
            )}
          </div>
        </div>

        <div className="relative cursor-pointer z-20 inline-block">
          <select
            onChange={(e) => setSelectedPaymentData(e.target.value)}
            value={selectedPaymentData}
            name="payment"
            id="payment"
            className="text-[#A3AED0] cursor-pointer relative z-20 inline-flex appearance-none bg-transparent py-1  pr-8 text-sm font-medium outline-none"
          >
            <option value="Today">Today</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
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
