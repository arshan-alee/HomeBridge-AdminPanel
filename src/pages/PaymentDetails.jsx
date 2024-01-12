import React from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";

const PaymentDetails = () => {
  return (
    <form className="w-[90%]  my-12 mx-auto">
      <div className="bg-[#111C44] rounded-3xl ">
        <p className="px-7 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
          회원관리
        </p>
        {/* <hr /> */}
        <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
        <div className="py-6">
          <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
            <InputContainer text="결제번호" placeholder="KimH12345" />
            <InputContainer text="회원번호" placeholder="h12345" />
            <InputContainer text="e123456789" placeholder="2023.11.04  14:32" />
          </div>

          <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
            <InputContainer text="상품가격" placeholder="199,000 KRW" />
            <InputContainer text="결제수단" placeholder="신용카드" />
            <InputContainer text="결제일자" placeholder="2023.11.04  14:32" />
          </div>
          <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
            <InputContainer text="결제상태" placeholder="결제완료" />
            <InputContainer text="환불일자" placeholder="-" />
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-auto mt-5 gap-5">
        <Button text="신청서수정" />
      </div>
    </form>
  );
};

export default PaymentDetails;
