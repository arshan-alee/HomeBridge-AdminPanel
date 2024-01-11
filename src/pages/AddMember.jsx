import React from "react";
import InputContainer from "../components/Shared/InputContainer";

const AddMember = () => {
  return (
    <>
      <div className="bg-[#111C44] rounded-3xl w-[80%] mx-auto mt-20">
        <p className="px-7 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
          회원관리
        </p>
        {/* <hr /> */}
        <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>

        <div className="py-6 px-7 grid grid-cols-3 gap-4 text-white">
          <InputContainer text="이름" />
          <InputContainer text="비밀번호" />
          <InputContainer text="비밀번호 확인" />
        </div>

        <div className="py-6 px-7 grid grid-cols-3 gap-4 text-white">
          <InputContainer text="이메일" />
          <InputContainer text="회원등급" />
        </div>
      </div>

      <div className="w-[80%] flex justify-end mx-auto mt-5">
        <button className="bg-[#111C44] text-white px-10 py-5">회원생성</button>
      </div>
    </>
  );
};

export default AddMember;
