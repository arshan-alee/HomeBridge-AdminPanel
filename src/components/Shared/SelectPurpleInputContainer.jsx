import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

const SelectPurpleInputContainer = ({ text, dropDownArray }) => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption) {
      navigate(selectedOption);
    }
  };

  return (
    <div className="flex flex-col min-w-[138px]">
      <div className="relative ">
        <select
          onChange={handleSelectChange}
          className={`w-full py-4 text-xs pl-5 relative z-2 cursor-pointer inline-flex appearance-none  pr-10 rounded-full text-[#FFF] bg-[#7551FF] focus:outline-none`}
        >
          <option value="">Please select</option>
          {dropDownArray.map((option, index) => {
            return (
              <option
                value={option.route}
                key={index}
                className="cursor-pointer"
              >
                {option.text}
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
