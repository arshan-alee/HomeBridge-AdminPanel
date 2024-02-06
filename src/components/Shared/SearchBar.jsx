// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Call the passed callback function with the search term
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center relative">
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
        className="w-full px-4 py-3 text-sm pl-10 rounded-full border-2 text-white bg-[#111C44] border-gray-300 focus:outline-none"
      />
      <button type="submit" className="absolute ml-5">
        <img
          src="/images/Search.png"
          alt="Search"
          className="pt-[1px] w-[15px]"
        />
      </button>
    </form>
  );
};

export default SearchBar;
