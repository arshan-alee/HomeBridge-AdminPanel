import React from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import SelectInputContainer from "../components/Shared/SelectInputContainer";

const MemberDetails = () => {
  const memebership_level = ["일반회원", "일반회원", "일반회원", "일반회원"];

  return (
    <>
      <div className="bg-[#111C44] rounded-3xl w-[80%] mx-auto mt-20">
        <p className="px-7 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
          회원관리
        </p>
        {/* <hr /> */}
        <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
        <div className="py-6">
          <div className="py-6 px-7 grid grid-cols-3 gap-4 text-white">
            <InputContainer text="이름" />
            <InputContainer text="비밀번호" />
            <InputContainer text="비밀번호 확인" />
          </div>

          <div className="py-6 px-7 grid grid-cols-3 gap-4 text-white">
            <InputContainer text="이메일" />
            <SelectInputContainer
              text="회원등급"
              dropDownArray={memebership_level}
            />
          </div>
        </div>
      </div>

      <div className="w-[80%] flex justify-end mx-auto mt-5 gap-5">
        <Button text="회원수정" />
        <Button text="회원삭제" />
      </div>
    </>
  );
};

export default MemberDetails;
