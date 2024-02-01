import React, { useState } from "react";

const InputContainer = ({ text, placeholder, ...props }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[18px]">{text}</p>
      <input
        name={props.name}
        value={props.value || ""}
        onChange={props.onChange}
        placeholder={placeholder}
        disabled={props.isDisable}
        className="w-full py-3 text-xs pl-3 font-bold rounded-full border-2 text-[#8F9BBA] bg-[#FFF] border-gray-300 focus:outline-none"
      />
    </div>
  );
};

export default InputContainer;
