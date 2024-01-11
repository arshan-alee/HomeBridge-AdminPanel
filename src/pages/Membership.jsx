import React from "react";
import TabbarButton from "../components/Shared/TabbarButton";
import SearchBar from "../components/Shared/SearchBar";

const Membership = () => {
  const handleDownloadInExcel = () => {
    console.log("handleDownloadInExcel function called");
  };

  const handleNavigation = () => {
    console.log("Add member function called");
  };

  const data = [
    // Add your data objects here
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
    {
      id: "H12345",
      name: "kim",
      email: "test@gmail.com",
      status: "확인완료",
      date: "2023.11.04",
    },
  ];

  return (
    <div className="w-full px-16">
      {/* Top bar */}
      <div className="flex flex-row items-center justify-between mb-7">
        <div className="flex gap-3">
          <TabbarButton text="엑셀다운로드" onClick={handleDownloadInExcel} />
          <TabbarButton text="회원 추가하기" onClick={handleNavigation} />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#111C44] rounded-tl-[20px] rounded-tr-[10px] rounded-br-[2px] rounded-bl-0">
        <p className="px-7 py-3 text-left text-2xl font-bold text-white uppercase tracking-wider">
          회원관리
        </p>
      </div>

      <div className="min-w-full bg-[#111C44] rounded-b-3xl  text-white shadow-md overflow-hidden ">
        <div className="min-w-full bg-[#111C44] rounded-b-3xl text-white shadow-md overflow-hidden">
          <div
            className="overflow-y-auto custom-scrollbar"
            style={{ maxHeight: "60vh" }}
          >
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    고유번호
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    이름
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    이메일
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    확인상태
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    가입일자
                  </th>
                </tr>
              </thead>
              <tbody className="relative overflow-auto">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="px-7 py-5  bg-[#111C44] text-sm">
                      <p className="text-white whitespace-no-wrap">{row.id}</p>
                    </td>
                    <td className="px-7 py-5  bg-[#111C44] text-sm">
                      <p className="text-white whitespace-no-wrap">
                        {row.name}
                      </p>
                    </td>
                    <td className="px-7 py-5  bg-[#111C44] text-sm">
                      <p className="text-white whitespace-no-wrap">
                        {row.email}
                      </p>
                    </td>
                    <td className="px-7 py-5  bg-[#111C44] text-sm">
                      <p className="text-white whitespace-no-wrap">
                        {row.status}
                      </p>
                    </td>
                    <td className="px-7 py-5  bg-[#111C44] text-sm">
                      <p className="text-white whitespace-no-wrap">
                        {row.date}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
