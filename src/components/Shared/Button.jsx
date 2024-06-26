import React from "react";
import RequestLoader from "./RequestLoader";

const Button = ({ text, onClick, loading }) => {
  return (
    <button
      type="submit"
      className="bg-[#111C44] text-white px-10 py-4 font-bold rounded-[20px]"
      onClick={onClick}
    >
      {loading ? <RequestLoader /> : "회원생성"}
    </button>
  );
};

export default Button;
