import { IoChevronDownSharp } from "react-icons/io5";
import TabbarButton from "../components/Shared/TabbarButton";
import SearchBar from "../components/Shared/SearchBar";
import { eventData, eventListData } from "../utils/data";
import Pagination from "../components/Shared/Pagination";
import usePagination from "../utils/usePagination";
import { useNavigate } from "react-router";
import SelectPurpleInputContainer from "../components/Shared/SelectPurpleInputContainer";
import { exportToExcel } from "../utils/ExportToExcel";

const EventList = () => {
  const paginate = usePagination();
  const navigate = useNavigate();

  const { currentPage, totalPages, visibleItems, goToPage } =
    paginate(eventListData);

  return (
    <div className="w-full pt-4 px-6">
      {/* Top bar */}
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex gap-3">
          <TabbarButton
            text="엑셀다운로드"
            onClick={() => exportToExcel(eventListData, "Event List")}
          />
          <TabbarButton
            text="이벤트등록"
            onClick={() => navigate("/admin/event_resgistration")}
          />
        </div>
        <div className="flex justify-start items-center gap-4">
          <SelectPurpleInputContainer
            dropDownArray={[
              {
                text: "신청리스트",
                route: "/admin/event_application_list",
              },
              {
                text: "이벤트리스트",
                route: "/admin/event_list",
              },
            ]}
          />
          <SearchBar />
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#111C44] rounded-tl-[20px] rounded-tr-[10px] rounded-br-[2px] rounded-bl-0">
        <p className="px-7 py-4 text-left text-2xl font-bold text-white uppercase tracking-wider">
          Event 신청 리스트
        </p>
      </div>

      <div className="min-w-full bg-[#111C44] rounded-b-3xl  text-white shadow-md overflow-hidden ">
        <div className="min-w-full bg-[#111C44] rounded-b-3xl text-white shadow-md overflow-hidden">
          <div
            className="overflow-y-auto h-[57vh] custom-scrollbar"
            // style={{ maxHeight: "60vh" }}
          >
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    이벤트명
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    이벤트상품번호
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    이벤트상품가격
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    마감여부
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    신청자수
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                  >
                    등록일자
                    <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                  </th>
                </tr>
              </thead>
              <tbody className="relative overflow-auto">
                {visibleItems.map((row, index) => (
                  <tr
                    className=" bg-[#111C44] hover:bg-[#0c1845] duration-300"
                    key={index}
                    // onClick={() => navigate("/admin/event_application_details")}
                  >
                    <td className="px-7 py-5   text-sm">
                      <p className="text-white whitespace-no-wrap">
                        {row.name}
                      </p>
                    </td>
                    <td className="px-7 py-5   text-sm">
                      <p className="text-white whitespace-no-wrap">
                        {row.productNo}
                      </p>
                    </td>
                    <td className="px-7 py-5   text-sm">
                      <p className="text-white whitespace-no-wrap">
                        {row.productPrice}
                      </p>
                    </td>
                    <td className="px-7 py-5   text-sm">
                      <p className="text-white whitespace-no-wrap">
                        {row.deadline}
                      </p>
                    </td>
                    <td className="px-7 py-5   text-sm">
                      <p className="text-white whitespace-no-wrap">
                        {row.noOfApplicants}
                      </p>
                    </td>

                    <td className="px-7 py-5   text-sm">
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

export default EventList;
