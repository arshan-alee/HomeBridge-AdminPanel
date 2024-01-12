import React from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import SelectInputContainer from "../components/Shared/SelectInputContainer";
import Textarea from "../components/Shared/Textarea";
import AddSchedule from "../components/Shared/AddSchedule";

const EventRegistration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  const memebership_level = ["일반회원", "일반회원", "일반회원", "일반회원"];

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
              <InputContainer
                text="상품소개"
                placeholder="[New year's sunrise] Yeosu Hyangilam Sunrise with Jeolla-do delicacies, Suncheon Jeonju 1 night 2 days"
              />
            </div>

            <div className="grid py-6 px-10 text-white">
              <Textarea
                text="Event Information"
                placeholder=""
                height="300px"
                rounded="10px"
              />
            </div>
            <div className="grid py-6 px-10 text-white">
              <Textarea
                text="Product information"
                placeholder=""
                height="300px"
                rounded="10px"
              />
            </div>
          </div>
        </div>

        {/* Add Schedules */}
        <AddSchedule />

        {/* Schdeule Button */}
        <button className="bg-[#111C44] rounded-3xl mt-4 flex w-full justify-center items-center gap-4 text-[32px] text-[#fff] font-bold py-6 px-10">
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
