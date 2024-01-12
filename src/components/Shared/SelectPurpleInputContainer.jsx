import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const SelectPurpleInputContainer = ({ text, dropDownArray }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative ">
        <select
          className={`w-full py-3 text-xs pl-5 relative z-2 inline-flex appearance-none  pr-10 rounded-full text-[#FFF] bg-[#7551FF] focus:outline-none`}
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

export default SelectPurpleInputContainer;
