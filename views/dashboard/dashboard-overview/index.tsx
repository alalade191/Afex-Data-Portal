import React from "react";
import Image from "next/image";
import Cards from "../dashboardcards";
import DashboadTableList from "../dashboard-table";

const DashboardOverview = () => {
  return (
    <div>
      <Cards />

      <div className="flex items-center justify-between pt-[40px] pb-[30px]">
        <h4 className="text-base font-semibold text-[#2C2F3C]">
          Recently Uploaded Staff
        </h4>
        <div className="flex items-center  gap-2">
          <p className="text-sm font-medium text-[#3045BC]">View all staff</p>
          <figure className="w-[10px] h-[10px]">
            <Image
              height={10}
              width={10}
              src={"/icons/icon.svg"}
              alt=""
              className="w-full h-full"
            />
          </figure>
        </div>
      </div>

      <div className="h-[260px] overflow-y-scroll hide">
        <DashboadTableList />
      </div>
    </div>
  );
};

export default DashboardOverview;
