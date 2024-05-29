"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  return (
    <form className="w-full lg:w-2/3 m-auto my-12 md:p-6">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
          <FiSearch size={24} className="text-gray-500" />
        </div>
        <input
          id="search"
          className="block w-full p-4 ps-24 border-2 text-slate-950 border-gray-400 rounded-xl bg-gray-50 focus:bg-white focus:ring-primary-950 focus:border-primary-950   outline-none"
          placeholder="ابحث عن منتج"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
            <IoCloseCircle
              size={24}
              className="text-gray-500"
              onClick={() => setSearch("")}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchBox;
