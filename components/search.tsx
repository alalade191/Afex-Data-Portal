import React from "react";
import Image from "next/image";

const Search = () => {
  return (
    <div className="flex border border-[#D9DFE4] w-[250px] rounded-lg">
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
export default Search;
