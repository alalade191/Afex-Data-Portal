import React from "react";
import Image from "next/image";
const InactiveTable = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#FDEEEE] flex gap-1 items-center border rounded-3xl py-1 px-2">
        <div className="h-[8px] w-[8px] flex items-center justify-center p-1 bg-[#ED5556] rounded-full"></div>
        <span className="text-sm font-normal text-[#873031]">Inactive</span>
      </div>
      <Image height={30} width={30} src={"/icons/baseline.svg"} alt="" />
    </div>
  );
};
export default InactiveTable;
