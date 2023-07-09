import React from "react";
import Image from "next/image";

const Export = () => {
  return (
    <div className="flex items-center gap-1 border-[2px] border-[#D9DFE4] bg-[#F7F9FC] rounded-lg p-1 w-[90px]">
      <figure className="w-[30px] h-[30px]">
        <Image
          height={30}
          width={30}
          src={"/icons/export.svg"}
          alt="export"
          className="w-full h-full"
        />
      </figure>
      <span className="font-medium text-sm text-[#5E606A]">Export</span>
    </div>
  );
};
export default Export;
