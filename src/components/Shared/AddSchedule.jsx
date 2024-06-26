import React, { useState } from "react";
import InputContainer from "./InputContainer";
import Textarea from "./Textarea";
import UploadInput from "./UploadInput";

const AddSchedule = ({ index, schedule, removeSchedule, onChange }) => {
  const [daySchedules, setDaySchedules] = useState([]);

  const addDaySchedule = () => {
    setDaySchedules([...daySchedules, {}]);
  };

  const handleDayScheduleChange = (dayIndex, dayScheduleData) => {
    const updatedDaySchedules = [...daySchedules];
    updatedDaySchedules[dayIndex] = dayScheduleData;
    setDaySchedules(updatedDaySchedules);
  };

  return (
    <div className="bg-[#111C44] rounded-3xl mt-4 pb-16">
      <div className="px-10 py-6 flex justify-between items-center">
        <p className=" text-2xl font-bold text-white uppercase tracking-wider">
          Day 1
        </p>

        <img
          src="/images/minimize.png"
          alt="logo"
          className="cursor-pointer"
          onClick={removeSchedule}
        />
      </div>
      {/* <hr /> */}
      <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>

      <div className="pt-8 px-10 grid grid-cols-1 text-white">
        <InputContainer
          text="일정 소개"
          placeholder="2023.12.30(토)-서울/전주/순천/광양"
          name="scheduleIntroduction"
          value={schedule?.scheduleIntroduction}
          onChange={(e) =>
            onChange(index, {
              ...schedule,
              scheduleIntroduction: e.target.value,
            })
          }
        />
      </div>

      {/* Add Day Schedule */}
      {daySchedules.map((daySchedule, dayIndex) => (
        <div
          key={dayIndex}
          className="grid items-end grid-cols-4 gap-8 px-10 mt-7"
        >
          <div className="col-span-1 text-[#fff] flex flex-col gap-10">
            <InputContainer
              text="상세일정"
              placeholder="서울"
              name="detailedSchedule"
              value={daySchedule?.detailedSchedule}
              onChange={(e) =>
                handleDayScheduleChange(dayIndex, {
                  ...daySchedule,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <UploadInput />
          </div>
          <div className="col-span-3">
            <Textarea
              text=""
              placeholder=""
              height="300px"
              rounded="10px"
              name="dayScheduleInfo"
              value={daySchedule?.dayScheduleInfo}
              onChange={(e) =>
                handleDayScheduleChange(dayIndex, {
                  ...daySchedule,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
        </div>
      ))}

      {/* Schdeule Button */}
      <button
        onClick={addDaySchedule}
        className="bg-[#7551FF] w-[90%] mx-auto rounded-3xl mt-8 flex  justify-center items-center gap-4 text-[32px] text-[#fff] font-bold py-6 "
      >
        Day1 일정 추가하기
        <img src="/images/add_icon.png" alt="logo" />
      </button>
    </div>
  );
};

export default AddSchedule;
