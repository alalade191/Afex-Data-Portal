import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cards from "../dashboardcards";
import Link from "next/link";
import DashboadTableList from "../dashboard-table";
import withAuth from "@/pages/routing-protection";

export interface IDasboard {
  female_staff: number;
  male_staff: number;
  overall_squad: number;
  overall_staff: number;
  overall_tribe: number;
  recent_staff: any[];
  last_created_tribe: string;
  last_created_squad: string;
}

const DashboardOverview = () => {
  const [view, setView] = useState<IDasboard>(null);
  const viewdata = async () => {
    const token = JSON.parse(localStorage.getItem("userlogin") as string)
      ?.tokens?.access;
    const res = await fetch(
      "https://web-production-029d.up.railway.app/api/staff/dashboard/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    // console.log(data);
    setView(data);
  };
  useEffect(() => {
    viewdata();
  }, []);
  return (
    <div>
      <Cards dashboardData={view} />

      <div className="flex items-center justify-between pt-[40px] pb-[30px]">
        <h4 className="text-base font-semibold text-[#2C2F3C] dark:text-[#FFFFFF]">
          Recently Uploaded Staff
        </h4>
        <div className="flex items-center  gap-2">
          <p className="text-sm font-medium text-[#3045BC] dark:text-[#3851DD]">
            <Link href={"/staff-management"}>View all staff</Link>
          </p>
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
        <DashboadTableList tableData={view?.recent_staff} />
      </div>
    </div>
  );
};

export default DashboardOverview;
