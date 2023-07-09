import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import DashboardSidebar from "./dashboard-sidebar";
import Cards from "./dashboardcards";
import DashboadTableList from "./dashboard-table";
import DashboardOverview from "./dashboard-overview";
import AdminProfile from "./admin-profile";
import Export from "@/components/export";
import FilterSearch from "@/components/filtersearch";
import StaffManagement from "./staff-management";
const DashBoard = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <header className="w-full max-w-full py-[12px] border-b border-[#F0F0F1]">
        <div className="w-[95%] mx-auto flex items-center justify-between">
          <figure className="h-[20px] w-[70px]">
            <Image
              height={29}
              width={100}
              src={"/images/login-logo.svg"}
              alt="logo"
              className="w-full h-full"
            />
          </figure>
          <div className="flex items-center gap-2 border-l border-[#F0F0F1] pl-[8px]">
            <figure className="h-[35px] w-[35px]  ">
              <Image
                height={50}
                width={30}
                src={"/icons/notification.svg"}
                alt="notification"
                className="w-full h-full"
              />
            </figure>
            <figure
              className="w-[35px] h-[35px]"
              onClick={() => {
                if (theme === "light") {
                  setTheme("dark");
                } else {
                  setTheme("light");
                }
              }}
            >
              <Image
                height={50}
                width={30}
                src={"/icons/sun.svg"}
                alt="user-image"
                className="w-full h-full"
              />
            </figure>
            <div className="flex items-center gap-2">
              <figure className="w-[35px] h-[35px]">
                <Image
                  height={40}
                  width={40}
                  src={"/icons/user-image.svg"}
                  alt="user-image"
                  className="w-full h-full"
                />
              </figure>
              <div className="flex flex-col">
                <h4 className="text-[14px] font-medium text-[#4A4C58]">
                  Gloria Eromonsele
                </h4>
                <p className="text-[12px] font-normal text-[#8F9198]">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Body style */}
      <div className="grid grid-cols-[220px_1fr]">
        <div className="sidebar bg-[#F6F8F9]">
          <DashboardSidebar />
        </div>
        <div className="px-[28px] pt-[28px] bg-[#FDFDFD] ">
          {/* <DashboardOverview /> */}
          {/* <AdminProfile /> */}
          <StaffManagement />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
