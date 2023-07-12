import { useTheme } from "next-themes";
import Image from "next/image";
import { useContext } from "react";
import Export from "@/components/export";
import FilterSearch from "@/components/filtersearch";
import StaffManagement from "./staff-management";
import { AuthContext, IContextType } from "@/pages/_app";
import DashboardSidebar from "@/views/dashboard/dashboard-sidebar";
import Search from "@/components/search";

const TribeSquard = () => {
  const { theme, setTheme } = useTheme();
  const { authUser } = useContext(AuthContext) as IContextType;
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
                  {authUser?.first_name} {authUser?.last_name}
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

        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Export />
              <Search />
            </div>
            <button
              className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px] px-[24px] font-medium
             transition-transform duration-300 transform-gpu hover:scale-105"
            >
              Create tribe
            </button>
          </div>
          <div className="border-t border-b border-[#D9DFE4] mt-6 pt-4 pb-1">
            <div className="flex items-center gap-1 hover:border-b-[2px] hover:border-[#D9DFE4] w-[80px]">
              <p className="text-xsfont-medium text-[#4A4C58]">Staff list </p>
              <span className="h-[16px] rounded-full w-[16px] pl-1 flex items-center bg-[#F7F9FC] font-semibold text-xs text-[#8F9198]">
                0
              </span>
            </div>
          </div>

          {/* <TribeList /> */}
          {/* update of staff listt */}

          <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <figure className="w-[150px] h-[150px]">
                <Image
                  height={30}
                  width={30}
                  src={"/icons/staff-list.svg"}
                  alt="staff list"
                  className="w-full h-full"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-center text-2xl text-[#5E606A]">
                  Tribe list empty
                </h3>
                <p className="font-normal text-sm text-[#5E606A] max-w-[260px] text-center">
                  You are yet to create any tribe
                </p>
              </div>
              <button
                className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px] mt-[20px] px-[24px] font-medium
             transition-transform duration-300 transform-gpu hover:scale-105 flex gap-1 justify-center items-center"
              >
                <Image
                  height={20}
                  width={20}
                  src={"/icons/plus-icon.svg"}
                  alt="iconplus"
                />
                <span>Create tribe</span>
              </button>
            </div>
          </div>
          {/* <StaffList /> */}
        </div>
      </div>
    </div>
  );
};

export default TribeSquard;
