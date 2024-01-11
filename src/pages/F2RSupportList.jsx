import React from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import SelectInputContainer from "../components/Shared/SelectInputContainer";
import Textarea from "../components/Shared/Textarea";

const F2RSupportList = () => {
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
            F-2-R 지원 리스트
          </p>
          {/* <hr /> */}
          <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
          <div className="pb-6">
            <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
              <InputContainer text="이름" placeholder="Kim" />
              <InputContainer text="회원번호" placeholder="h12345" />
              <InputContainer text="성별" placeholder="남" />
            </div>

            <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
              <InputContainer text="국적" placeholder="USA" />
              <InputContainer text="현재거주위치" placeholder="seoul" />
              <InputContainer text="전화번호" placeholder="02-1111-1111" />
            </div>

            <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
              <InputContainer text="이메일" placeholder="test@gmail.com" />
              <InputContainer text="신청일자" placeholder="2023.11.04  14:32" />
            </div>

            <div className="grid py-6 px-10 text-white">
              <Textarea text="메시지" placeholder="hello" />
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

export default F2RSupportList;
