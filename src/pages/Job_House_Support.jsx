import { IoChevronDownSharp } from "react-icons/io5";
import TabbarButton from "../components/Shared/TabbarButton";
import SearchBar from "../components/Shared/SearchBar";
import { jobAndHouse_SupportList } from "../utils/data";
import Pagination from "../components/Shared/Pagination";
import usePagination from "../utils/usePagination";
import { useNavigate } from "react-router";
import SelectPurpleInputContainer from "../components/Shared/SelectPurpleInputContainer";
import { useEffect, useState } from "react";
import baseUrl from "../utils/baseUrl";
import { GetAllData } from "../axios/NetworkCall";
import formatDate from "../utils/helper";
import RequestLoader from "../components/Shared/RequestLoader";

const Job_House_Support = () => {
  const paginate = usePagination();
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [data, setData] = useState([]);
  const [Error, setError] = useState();

  const { currentPage, totalPages, visibleItems, goToPage } = paginate(data);

  const handleDownloadInExcel = () => {
    console.log("handleDownloadInExcel function called");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoader(true);
      const response = await GetAllData(
        `${baseUrl}/api/job_house_application/allApplications`
      );

      if (response.success) {
        setData(response.data);
      } else {
        // console.error("Error or no data:", response.message);
        setError(response.message);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="w-full pt-4 px-12">
      {/* Top bar */}
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex gap-3">
          <TabbarButton text="엑셀다운로드" onClick={handleDownloadInExcel} />
          {/* Announcement Registeration */}
          <TabbarButton text="공고등록" onClick={handleDownloadInExcel} />
        </div>
        <div className="w-[60%] flex flex-row justify-end gap-3">
          <SelectPurpleInputContainer
            dropDownArray={[
              {
                text: "지원리스트",
                route: "/admin/job_house_support",
              },
              {
                text: "공고리스트",
                route: "/admin/job_house_announcement",
              },
            ]}
          />

          <SearchBar />
        </div>
      </div>

      {/* Body */}

      {loader ? (
        <RequestLoader />
      ) : (
        <>
          {Error ? (
            <div className="text-black text-center ">{Error}</div>
          ) : (
            <>
              <div className="bg-[#111C44] rounded-tl-[20px] rounded-tr-[10px] rounded-br-[2px] rounded-bl-0">
                <p className="px-7 py-4 text-left text-2xl font-bold text-white uppercase tracking-wider">
                  Job&House 지원 리스트
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
                            회원번호
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
                            성별
                            <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                          </th>
                          <th
                            scope="col"
                            className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                          >
                            국적
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
                            key={index}
                            className="cursor-pointer bg-[#111C44] hover:bg-[#0c1845] duration-300"
                            onClick={() =>
                              navigate(
                                `/admin/job_and_house_support_details/${row._id}`
                              )
                            }
                          >
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row._id.toString().slice(0, 7)}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.name}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.gender}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.nationality}
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
                                {formatDate(row.applicationDate)}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={goToPage}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Job_House_Support;
