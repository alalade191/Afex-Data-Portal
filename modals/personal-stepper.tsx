import React from "react";

export default function PersonalStepper() {
  return (
    <div className="flex flex-col">
      <div className="w-[300px] h-[35px] flex items-center p-5 bg-[#EDEFFA] justify-between">
        <p className="font-normal text-base text-[#4A4C58]">
          Personal information
        </p>
        <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full p-3 border-[2px] border-[#3045BC] text-[#3045BC]">
          1
        </div>
      </div>
      <div className="h-[4px] w-[300px] bg-[#3045BC]"></div>
    </div>
  );
}
