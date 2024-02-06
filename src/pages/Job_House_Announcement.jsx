import { IoChevronDownSharp } from "react-icons/io5";
import TabbarButton from "../components/Shared/TabbarButton";
import SearchBar from "../components/Shared/SearchBar";
import { jobAndHouse_AnnouncementList } from "../utils/data";
import Pagination from "../components/Shared/Pagination";
import usePagination from "../utils/usePagination";
import { useNavigate } from "react-router";
import SelectPurpleInputContainer from "../components/Shared/SelectPurpleInputContainer";
import { useEffect, useState } from "react";
import { GetAllData } from "../axios/NetworkCall";
import formatDate from "../utils/helper";
import RequestLoader from "../components/Shared/RequestLoader";
import { exportToExcel } from "../utils/ExportToExcel";

const Job_House_Announcement = () => {
  const paginate = usePagination();
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [data, setData] = useState([]);
  const [Error, setError] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const { currentPage, totalPages, visibleItems, goToPage } =
    paginate(filteredData);

  const handleDownloadInExcel = () => {
    console.log("handleDownloadInExcel function called");
    exportToExcel(data, "JobHouse Support List");
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const getData = async () => {
    try {
      setLoader(true);
      const response = await GetAllData(`/api/job_house/allAnnouncements`);

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

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredData(data); // Reset to original data if search term is empty
    } else {
      const results = data.filter(
        (item) =>
          (item.announcementName &&
            item.announcementName
              .toLowerCase()
              .includes(searchTerm.toLowerCase())) ||
          (item.companyName &&
            item.companyName
              .toLowerCase()
              .includes(searchTerm.toLowerCase())) ||
          (item.deadline &&
            item.deadline.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (item.accomodationName &&
            item.accomodationName
              .toLowerCase()
              .includes(searchTerm.toLowerCase())) ||
          (item.salary &&
            item.salary.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (item.rent &&
            item.rent.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredData(results);
    }
  };

  return (
    <div className="w-full pt-4 px-12">
      {/* Top bar */}
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex gap-3">
          <TabbarButton text="엑셀다운로드" onClick={handleDownloadInExcel} />
          {/* Announcement Registeration */}
          <TabbarButton
            text="공고등록"
            onClick={() => {
              navigate("/admin/" + "announcement_resgistration");
            }}
          />
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

          <SearchBar onSearch={handleSearch} />
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
            <div className="text-black text-center ">{Error}</div>
          ) : (
            <>
              <div className="bg-[#111C44] rounded-tl-[20px] rounded-tr-[10px] rounded-br-[2px] rounded-bl-0">
                <p className="px-7 py-4 text-left text-2xl font-bold text-white uppercase tracking-wider">
                  Job&House 공고 리스트
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
                            공고명
                            <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                          </th>
                          <th
                            scope="col"
                            className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                          >
                            회사명
                            <IoChevronDownSharp className="text-[#A3AED0] ml-2 inline-block text-[18px] cursor-pointer" />
                          </th>
                          <th
                            scope="col"
                            className="px-7 py-3 border-b-[1px] border-[#ffffff1a] bg-[#111C44] text-left text-sm font-semibold text-[#A3AED0] uppercase tracking-wider"
                          >
                            숙소명
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
                            key={index}
                            className="cursor-pointer bg-[#111C44] hover:bg-[#0c1845] duration-300"
                            onClick={() => {
                              navigate(
                                `/admin/job_and_house_announcement_details/${row._id}`
                              );
                            }}
                          >
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.announcementName || "-"}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.companyName || "-"}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.accomodationName || "-"}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.deadline || "-"}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.numberOfApplicants || "-"}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {formatDate(row.registerationDate) || "-"}
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
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Job_House_Announcement;
