import React from "react";

const SelectInputContainer = ({ text, dropDownArray }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{text}</p>

      <select
        className={`w-full py-3 text-xs pl-3 rounded-full border-2 text-[#8F9BBA] bg-[#FFF] border-gray-300 focus:outline-none`}
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
    </div>
  );
};

export default SelectInputContainer;
