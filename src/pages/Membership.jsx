import { IoChevronDownSharp } from "react-icons/io5";
import TabbarButton from "../components/Shared/TabbarButton";
import SearchBar from "../components/Shared/SearchBar";
import { membershipData } from "../utils/data";
import Pagination from "../components/Shared/Pagination";
import usePagination from "../utils/usePagination";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { GetAllData } from "../axios/NetworkCall";
import RequestLoader from "../components/Shared/RequestLoader";
import formatDate from "../utils/helper";
import { exportToExcel } from "../utils/ExportToExcel";

const Membership = () => {
  const paginate = usePagination();
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [Error, setError] = useState();

  const { currentPage, totalPages, visibleItems, goToPage } =
    paginate(filteredData);

  const handleDownloadInExcel = () => {
    console.log("handleDownloadInExcel function called");
    exportToExcel(data, "Membership List");
  };

  const handleNavigation = () => {
    console.log("Add member function called");
    navigate("/admin/" + "add_member");
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
      const response = await GetAllData(`/api/user/allUsers`);
      console.log("response: ", response);
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
      // Filter data based on searchTerm. Adjust the fields to match your data structure.
      const results = data.filter(
        (item) =>
          item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase())
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
          <TabbarButton text="회원 추가하기" onClick={handleNavigation} />
        </div>
        <div className="w-[250px]">
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
                  회원관리
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
                            className="cursor-pointer bg-[#111C44] hover:bg-[#0c1845] duration-300"
                            onClick={() =>
                              navigate(`/admin/member_details/${row._id}`)
                            }
                          >
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row._id.toString().slice(0, 7) || "-"}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.userName}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {row.email}
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                확인완료
                              </p>
                            </td>
                            <td className="px-7 py-5   text-sm">
                              <p className="text-white whitespace-no-wrap">
                                {formatDate(row.createdAt) || "-"}
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

export default Membership;
