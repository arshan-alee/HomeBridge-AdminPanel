import React from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import Textarea from "../components/Shared/Textarea";

const InquiryDetails = () => {
  return (
    <form className="w-[90%]  my-12 mx-auto">
      <div className="bg-[#111C44] rounded-3xl ">
        <p className="px-7 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
          Event 신청 정보
        </p>
        {/* <hr /> */}
        <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
        <div className="py-6">
          <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
            <InputContainer text="First Name(성)" placeholder="Kim" />
            <InputContainer text="Last Name(이름)" placeholder="h12345" />
            <InputContainer text="전화번호" placeholder="02-1111-111" />
          </div>

          <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
            <InputContainer text="이메일" placeholder="test@gmail.com" />
            <InputContainer text="신청일자" placeholder="2023.11.04" />
          </div>

          <div className="grid py-6 px-10 text-white">
            <Textarea text="메시지" placeholder="hello" height="200px" />
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-auto mt-5 gap-5">
        <Button text="회원수정" />
        <Button text="회원삭제" />
      </div>
    </form>
  );
};

export default InquiryDetails;
