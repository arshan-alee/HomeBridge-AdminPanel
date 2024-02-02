function RequestLoader({ size }) {
  return (
    <div
      className={`animate-spin rounded-full mx-auto ${
        size == "large"
          ? "h-[120px] w-[120px] border-[#111c44]"
          : "h-[30px] w-[30px] border-[#fff]"
      }  border-2 border-r-0 border-b-0 `}
    ></div>
  );
}

export default RequestLoader;
