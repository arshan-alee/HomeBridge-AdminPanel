import React from "react";

const UploadInput = () => {
  return (
    <div className="h-[150px] grid place-items-center bg-[#fff] rounded-md">
      <div className="w-[70px] h-[70px]   grid place-content-center bg-[#1B254B] rounded-full">
        <img src="/images/upload.png" alt="logo" />
      </div>
      <p className="text-[18px] font-bold text-[#1B254B] -mt-7">이미지 등록</p>
    </div>
  );
};

export default UploadInput;
