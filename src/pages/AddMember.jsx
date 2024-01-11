import React from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import SelectInputContainer from "../components/Shared/SelectInputContainer";

const AddMember = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  const memebership_level = ["일반회원", "일반회원", "일반회원", "일반회원"];

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-[90%]   my-12">
        <div className="bg-[#111C44] rounded-3xl ">
          <p className="px-7 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
            회원관리
          </p>
          {/* <hr /> */}
          <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
          <div className="py-6">
            <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
              <InputContainer text="이름" placeholder="Kim" />
              <InputContainer text="비밀번호" placeholder="h12345" />
              <InputContainer text="비밀번호 확인" placeholder="2023.11.04" />
            </div>

            <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
              <InputContainer text="이메일" placeholder="test@gmail.com" />
              <SelectInputContainer
                text="회원등급"
                dropDownArray={memebership_level}
              />
            </div>
          </div>
        </div>

        <div className=" flex justify-end mx-auto mt-5">
          <Button text="회원생성" />
        </div>
      </form>
    </>
  );
};

export default AddMember;
