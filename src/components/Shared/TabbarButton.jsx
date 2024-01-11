import React from "react";

const TabbarButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#111C44] text-[#FFF] w-[190px] rounded-2xl py-4 text-lg font-bold"
    >
      {text}
    </button>
  );
};

export default TabbarButton;
