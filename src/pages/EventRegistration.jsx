import React from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import SelectInputContainer from "../components/Shared/SelectInputContainer";
import Textarea from "../components/Shared/Textarea";

const EventRegistration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  const memebership_level = ["일반회원", "일반회원", "일반회원", "일반회원"];

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-[90%]   my-12">
        <div className="bg-[#111C44] rounded-3xl">
          <p className="px-10 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
            Event 공고
          </p>
          {/* <hr /> */}
          <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
          <div className="pb-6">
            <div className="py-6 px-10 grid gap-16 text-white">
              <InputContainer
                text="상품소개"
                placeholder="[New year's sunrise] Yeosu Hyangilam Sunrise with Jeolla-do delicacies, Suncheon Jeonju 1 night 2 days"
              />
            </div>

            <div className="grid py-6 px-10 text-white">
              <Textarea
                text="메시지"
                placeholder="hello"
                height="200px"
                rounded="50px"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-7 mt-5">
          <Button text="신청서수정" />
          <Button text="신청서삭제" />
        </div>
      </form>
    </>
  );
};

export default EventRegistration;
