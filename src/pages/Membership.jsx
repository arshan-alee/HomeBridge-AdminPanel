import React from "react";
import TabbarButton from "../components/Shared/TabbarButton";

const Membership = () => {
  const handleDownloadInExcel = () => {
    console.log("handleDownloadInExcel function called");
  };

  const handleNavigation = () => {
    console.log("Add member function called");
  };

  return (
    <div className="w-full px-16">
      <TabbarButton text="엑셀다운로드" onClick={handleDownloadInExcel} />
      <TabbarButton text="회원 추가하기" onClick={handleNavigation} />
    </div>
  );
};

export default Membership;
