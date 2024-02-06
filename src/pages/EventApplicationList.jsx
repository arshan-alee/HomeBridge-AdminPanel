import { IoChevronDownSharp } from "react-icons/io5";
import TabbarButton from "../components/Shared/TabbarButton";
import SearchBar from "../components/Shared/SearchBar";
import { eventData } from "../utils/data";
import Pagination from "../components/Shared/Pagination";
import usePagination from "../utils/usePagination";
import { useNavigate } from "react-router";
import SelectPurpleInputContainer from "../components/Shared/SelectPurpleInputContainer";
import { useEffect, useState } from "react";
import { GetAllData } from "../axios/NetworkCall";
import { exportToExcel } from "../utils/ExportToExcel";
import RequestLoader from "../components/Shared/RequestLoader";
import formatDate from "../utils/helper";

const EventApplicationDetails = () => {
  const paginate = usePagination();
  const navigate = useNavigate();

  const [loader, setLoader] = useState();
  const [data, setData] = useState([]);
  const [Error, setError] = useState();

  const { currentPage, totalPages, visibleItems, goToPage } = paginate(data);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoader(true);
      const response = await GetAllData(`/api/getAllApplications`);

      console.log("response.data");
      console.log(response.data);

      if (response.success) {
        setData(response.data);
      } else {
        setError(response.message);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="w-full pt-4 px-8">
      {/* Top bar */}
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex gap-3">
          <TabbarButton
            text="엑셀다운로드"
            onClick={() => exportToExcel(data, "Event Application List")}
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
      {loader ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <RequestLoader size="large" />
        </div>
      ) : (
        <>
          {Error ? (
            <div className="w-full h-[60vh] flex items-center justify-center">
              <h1 className="text-black text-center ">{Error}</h1>
            </div>
          ) : (
            <>
              <div className="bg-[#111C44] rounded-tl-[20px] rounded-tr-[10px] rounded-br-[2px] rounded-bl-0">
                <p className="px-7 py-4 text-left text-2xl font-bold text-white uppercase tracking-wider">
                  Event 신청 리스트
                </p>
              </div>

              <div className="min-w-full bg-[#111C44] rounded-b-3xl  text-white shadow-md overflow-hidden ">
                <div className="min-w-full bg-[#111C44] rounded-b-3xl text-white shadow-md overflow-hidden">
                  <div className="overflow-y-auto h-[57vh] custom-scrollbar">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                          >
                            회원번호
                            <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                          </th>
                          <th
                            scope="col"
                            className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                          >
                            이벤트
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
                            전화번호
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
                            신청일자
                            <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                          </th>
                        </tr>
                      </thead>

                      <tbody className="relative overflow-auto">
                        {visibleItems.map((row, index) => (
                          <tr
                            className="cursor-pointer bg-[#111C44] hover:bg-[#0c1845] duration-300"
                            key={index}
                            onClick={() =>
                              navigate(
                                `/admin/event_application_details/${row?._id}`
                              )
                            }
                          >
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {`${row?.user.toString().slice(0, 7)} ...` ||
                                  "-"}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {`${row?.event?.productIntroduction
                                  .toString()
                                  .slice(0, 20)} ...` || "-"}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.name}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.phoneNumber}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.email}
                              </p>
                            </td>

                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {formatDate(row?.applicationDate) || "-"}
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
              {data.length > 5 && (
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={goToPage}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default EventApplicationDetails;
