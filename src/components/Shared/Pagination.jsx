import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center mt-2 ">
      <button
        className="mr-2 py-[10px] pr-[11px] pl-[10px] text-[18px]  rounded-full"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`mx-2 text-[16px] py-[8px] px-[15px] font-semibold rounded-full ${
            currentPage === number ? "text-[#000] " : "text-[#777777]"
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      <button
        className="ml-2 py-[10px] pr-[10px] pl-[11px] text-[18px]  border rounded-full"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
