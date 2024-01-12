import React from "react";

const Textarea = ({ text, placeholder, height, rounded }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[18px]">{text}</p>
      <textarea
        placeholder={placeholder}
        style={{
          minHeight: height,
          borderRadius: rounded,
        }}
        className="  w-full py-8 px-8 text-xs 
     border-2 text-[#8F9BBA] bg-[#FFF] border-gray-300 focus:outline-none"
      ></textarea>
    </div>
  );
};

export default Textarea;
