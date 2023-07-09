import React from "react";
import Image from "next/image";

const FilterSearch = () => {
  return (
    <div className="flex border border-[#D9DFE4] w-[350px] rounded-lg">
      <div className="flex items-center  gap-1 p-2 rounded-l-lg w-[90px] border-[2px] border-[#D9DFE4] bg-[#F7F9FC]">
        <figure className="w-[20px] h-[20px]">
          <Image
            height={30}
            width={30}
            src={"/icons/filter.svg"}
            alt="export"
            className="w-full h-full"
          />
        </figure>
        <span className="font-medium text-sm text-[#868FA0]">Filter</span>
      </div>
      {/* input */}
      <div className="flex items-center w-[250px] p-2 justify-between">
        <input
          type="text"
          placeholder="Search"
          className="w-[150px] outline-none border-none text-sm font-normal text-[#A1A9B8]"
        />
        <figure className="w-[18px] h-[18px]">
          <Image
            height={30}
            width={30}
            src={"/icons/search.svg"}
            alt="search"
            className="w-full h-full"
          />
        </figure>
      </div>
    </div>
  );
};
export default FilterSearch;
