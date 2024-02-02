import React, { useState } from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import SelectInputContainer from "../components/Shared/SelectInputContainer";
import Textarea from "../components/Shared/Textarea";
import AddSchedule from "../components/Shared/AddSchedule";
import TextEditor from "../components/Shared/TextEditor";

const EventRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    // Your existing data properties
    productIntroduction: "",
    eventInformation: "",
    productInformation: "",
    schedules: [
      {
        scheduleIntroduction: "",
        daySchedules: [
          {
            detailedSchedule: "",
            scheduleImage: "",
            dayScheduleInfo: "",
          },
        ],
      },
    ],
  });

  console.log("dataaaaaaaaaaa");
  console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const addSchedule = () => {
    setData((prevValue) => ({
      ...prevValue,
      schedules: [...prevValue.schedules, {}],
    }));
  };

  const removeSchedule = (index) => {
    setData((prevValue) => ({
      ...prevValue,
      schedules: prevValue.schedules.filter((_, i) => i !== index),
    }));
  };

  const handleScheduleChange = (index, scheduleData) => {
    setData((prevValue) => {
      const updatedSchedules = [...prevValue.schedules];
      updatedSchedules[index] = scheduleData;
      return {
        ...prevValue,
        schedules: updatedSchedules,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-[90%]   my-12">
        {/* Top */}
        <div className="bg-[#111C44] rounded-3xl">
          <p className="px-10 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
            Event 공고
          </p>
          {/* <hr /> */}
          <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
          <div className="pb-20">
            <div className="py-6 px-10 grid gap-16 text-white">
              {/* ===== */}
              <TextEditor />

              {/* ========= */}
              <InputContainer
                text="상품소개"
                placeholder="[New year's sunrise] Yeosu Hyangilam Sunrise with Jeolla-do delicacies, Suncheon Jeonju 1 night 2 days"
                name="productIntroduction"
                value={data?.productIntroduction}
                onChange={handleChange}
              />
            </div>

            <div className="grid py-6 px-10 text-white">
              <Textarea
                text="Event Information"
                placeholder=""
                height="300px"
                rounded="10px"
                name="eventInformation"
                onChange={handleChange}
                value={data?.eventInformation}
              />
            </div>
            <div className="grid py-6 px-10 text-white">
              <Textarea
                text="Product information"
                placeholder=""
                height="300px"
                rounded="10px"
                name="productInformation"
                onChange={handleChange}
                value={data?.productInformation}
              />
            </div>
          </div>
        </div>

        {/* Schedules */}
        {data?.schedules.map((schedule, index) => (
          <AddSchedule
            key={index}
            index={index}
            schedule={schedule}
            removeSchedule={() => removeSchedule(index)}
            onChange={handleScheduleChange}
          />
        ))}

        {/* Schdeule Button */}
        <button
          onClick={addSchedule}
          className="bg-[#111C44] rounded-3xl mt-4 flex w-full justify-center items-center gap-4 text-[32px] text-[#fff] font-bold py-6 px-10"
        >
          일정 추가하기
          <img src="/images/add_icon.png" alt="logo" />
        </button>

        <div className="flex justify-end gap-7 mt-5">
          <Button text="공고등록" />
        </div>
      </form>
    </>
  );
};

export default EventRegistration;
