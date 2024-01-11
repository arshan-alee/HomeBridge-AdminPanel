import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const SelectInputContainer = ({ text, dropDownArray }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[18px]">{text}</p>

      <div className="relative ">
        <select
          className={`w-full py-3 text-xs pl-3 relative z-2 inline-flex appearance-none  pr-8 rounded-full border-2 text-[#8F9BBA] bg-[#FFF] border-gray-300 focus:outline-none`}
        >
          <option value="">Please select</option>
          {dropDownArray.map((option, index) => {
            return (
              <option value={option} key={index}>
                {option}
              </option>
            );
          })}
        </select>
        <span className="absolute top-1/2 right-5 z-10 -translate-y-1/2">
          <IoChevronDownSharp className="text-[#A3AED0] text-[22px] " />
        </span>
      </div>
    </div>
  );
};

export default SelectInputContainer;
