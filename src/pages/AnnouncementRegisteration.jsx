import React, { useState } from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import SelectInputContainer from "../components/Shared/SelectInputContainer";
import Textarea from "../components/Shared/Textarea";
import AddSchedule from "../components/Shared/AddSchedule";
import UploadRegisterationImage from "../components/Shared/UploadRegisterationImage";

const AnnouncementRegisteration = () => {
  const [isToggled, setIsToggled] = useState(true);
  const [uploadImages, setUploadImages] = useState([]);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-[90%]   my-12">
        {/* Top */}
        <div className="bg-[#111C44] rounded-3xl">
          <p className="px-10 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
            JOB&House 공고
          </p>
          {/* <hr /> */}
          <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
          <div className="pb-20">
            <div className="py-6 px-10 grid grid-cols-2 gap-16 text-white">
              <InputContainer text="공고명" placeholder="Kim" />
              <InputContainer text="회사명" placeholder="h12345" />
            </div>

            <div className="grid py-6 px-10 text-white">
              <Textarea
                text="JOB INFO"
                placeholder=""
                height="300px"
                rounded="10px"
              />
            </div>
            <div className="grid py-6 px-10 text-white">
              <Textarea
                text="Salary & Fringe benefits"
                placeholder=""
                height="300px"
                rounded="10px"
              />
            </div>
            <div className="grid py-6 px-10 text-white">
              <Textarea
                text="JOB DETAILS"
                placeholder=""
                height="300px"
                rounded="10px"
              />
            </div>

            {/* Toggle Container */}
            <div className="text-white px-10 flex flex-row items-center gap-8">
              <p className="text-2xl font-bold">숙소등록여부</p>
              <div>
                <div className="flex items-center justify-center ">
                  <label
                    htmlFor="toggleB"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="toggleB"
                        className="sr-only"
                        onChange={onToggle}
                        checked={isToggled}
                      />
                      <div
                        className={`block ${
                          isToggled ? "bg-[#7551FF]" : "bg-gray-600"
                        } w-12 h-7 rounded-full`}
                      ></div>
                      <div
                        className={`dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition ${
                          isToggled ? "transform translate-x-full bg-white" : ""
                        }`}
                      ></div>
                    </div>
                    <div className="ml-3 text-sm font-bold">
                      {isToggled ? "숙소정보 등록" : "숙소정보 미등록"}
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Show toggled items */}
            {isToggled && (
              <>
                <div className="py-6 px-10 w-[50%] text-white">
                  <InputContainer text="공고명" placeholder="Kim" />
                </div>

                {/* Upload Image Container */}
                <p className="px-10 text-white text-lg font-bold">회사명</p>

                <div className="py-6 px-10 flex flex-wrap gap-1 text-white">
                  <UploadRegisterationImage setUploadImages={setUploadImages} />
                  {uploadImages &&
                    uploadImages.map((item, index) => (
                      <div
                        key={index}
                        className="w-24 h-24 relative border overflow-hidden"
                      >
                        <img
                          src={item}
                          alt={`upload-preview-${index}`}
                          className="object-cover w-full h-full"
                        />
                        {/* <button
                          className="absolute top-1 right-1 bg-white p-1 rounded-full text-gray-700 text-sm"
                          onClick={() => handleRemoveImage(index)}
                        >
                          &times;
                        </button> */}
                      </div>
                    ))}
                </div>

                <div className="grid py-6 px-10 text-white">
                  <Textarea
                    text="General Information"
                    placeholder=""
                    height="300px"
                    rounded="10px"
                  />
                </div>
                <div className="grid py-6 px-10 text-white">
                  <Textarea
                    text="Explanation"
                    placeholder=""
                    height="300px"
                    rounded="10px"
                  />
                </div>
                <div className="grid py-6 px-10 text-white">
                  <Textarea
                    text="External Features"
                    placeholder=""
                    height="300px"
                    rounded="10px"
                  />
                </div>
                <div className="grid py-6 px-10 text-white">
                  <Textarea
                    text="Contract information"
                    placeholder=""
                    height="300px"
                    rounded="10px"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-7 mt-5">
          <Button text="공고등록" />
        </div>
      </form>
    </>
  );
};

export default AnnouncementRegisteration;

{
  /* <div className="flex items-center justify-center h-screen">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="toggleB" className="sr-only" onChange={onToggle} checked={isToggled} />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isToggled ? 'transform translate-x-full bg-blue-400' : ''}`}></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">
          {isToggled ? 'On' : 'Off'}
        </div>
      </label>
    </div> */
}
