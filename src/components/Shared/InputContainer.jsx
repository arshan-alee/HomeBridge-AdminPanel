import React, { useState } from "react";

const InputContainer = ({ text }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <p>{text}</p>
      <input
        // value={searchTerm}
        // onChange={handleSearchChange}
        className="w-full py-3 text-xs pl-3 rounded-full border-2 text-[#8F9BBA] bg-[#FFF] border-gray-300 focus:outline-none"
      />
    </div>
  );
};

export default InputContainer;
