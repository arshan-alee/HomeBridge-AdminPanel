import React, { useState } from "react";

const UploadRegisterationImage = ({ setUploadImages }) => {
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      //   setSelectedImage(URL.createObjectURL(img));
      setUploadImages((prevData) => [...prevData, URL.createObjectURL(img)]);
    }
  };

  return (
    <div className="h-[170px] w-[180px] grid place-items-center bg-[#fff] rounded-md mr-5">
      <label
        htmlFor="file-upload"
        className="w-[70px] h-[70px] grid place-content-center bg-[#1B254B] cursor-pointer rounded-full"
      >
        <img src="/images/upload.png" alt="Upload Icon" />
      </label>
      <input
        type="file"
        onChange={handleImageChange}
        id="file-upload"
        style={{ display: "none" }}
      />
      <label
        htmlFor="file-upload"
        className="text-[18px] font-bold text-[#1B254B] -mt-7 cursor-pointer"
      >
        숙소이미지 등록
      </label>
    </div>
  );
};

export default UploadRegisterationImage;
