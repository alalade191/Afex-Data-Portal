import React from "react";

export default function OrganizationStepper() {
  return (
    <div className="flex flex-col">
      <div className="w-[300px] h-[35px] flex items-center p-5 bg-[#F5F5F6] justify-between">
        <p className="font-normal text-base text-[#4A4C58]">
          Organization information
        </p>
        <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full p-3 border-[2px] border-[#8F9198] text-[#8F9198]">
          2
        </div>
      </div>
      {/* border-bottom can be added here for stepper */}
    </div>
  );
}
