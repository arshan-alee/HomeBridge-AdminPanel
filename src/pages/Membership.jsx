import { IoChevronDownSharp } from "react-icons/io5";
import TabbarButton from "../components/Shared/TabbarButton";
import SearchBar from "../components/Shared/SearchBar";
import { membershipData } from "../utils/data";
import Pagination from "../components/Shared/Pagination";
import usePagination from "../utils/usePagination";
import { useNavigate } from "react-router";

const Membership = () => {
  const paginate = usePagination();
  const navigate = useNavigate();

  const { currentPage, totalPages, visibleItems, goToPage } =
    paginate(membershipData);

  const handleDownloadInExcel = () => {
    console.log("handleDownloadInExcel function called");
  };

  const handleNavigation = () => {
    console.log("Add member function called");
    navigate("/admin/" + "addmember");
  };

  return (
    <div className="w-full pt-4 px-12">
      {/* Top bar */}
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex gap-3">
          <TabbarButton text="엑셀다운로드" onClick={handleDownloadInExcel} />
          <TabbarButton text="회원 추가하기" onClick={handleNavigation} />
        </div>
        <div className="w-[250px]">
          <SearchBar />
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#111C44] rounded-tl-[20px] rounded-tr-[10px] rounded-br-[2px] rounded-bl-0">
        <p className="px-7 py-4 text-left text-2xl font-bold text-white uppercase tracking-wider">
          회원관리
        </p>
      </div>

      <div className="min-w-full bg-[#111C44] rounded-b-3xl  text-white shadow-md overflow-hidden ">
        <div className="min-w-full bg-[#111C44] rounded-b-3xl text-white shadow-md overflow-hidden">
          <div
            className="overflow-y-auto h-[55vh] custom-scrollbar"
            // style={{ maxHeight: "60vh" }}
          >
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    고유번호
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    이름
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    이메일
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    확인상태
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    가입일자
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                </tr>
              </thead>
              <tbody className="relative overflow-auto">
                {visibleItems.map((row, index) => (
                  <tr
                    key={index}
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/admin/" + "memberdetails");
                    }}
                  >
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

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={goToPage}
      />
    </div>
  );
};

export default Membership;
