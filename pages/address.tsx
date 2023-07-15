import { useTheme } from "next-themes";
import React, { useContext } from "react";
import { AuthContext, IContextType } from "./_app";
import Image from "next/image";
import DashboardSidebar from "@/views/dashboard/dashboard-sidebar";
import Office from "@/views/dashboard/office";
import withAuth from "./routing-protection";

function Address() {
  const { theme, setTheme } = useTheme();
  const { authUser } = useContext(AuthContext) as IContextType;
  return (
    <div>
      <header className="w-full max-w-full py-[12px] border-b border-[#F0F0F1]">
        <div className="w-[95%] mx-auto flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <figure className="h-[20px] w-[70px]">
              <Image
                height={29}
                width={100}
                src={"/images/login-logo.svg"}
                alt="logo"
                className="w-full h-full"
              />
            </figure>

            <figure className="h-[30px] ml-[105px]">
              <Image
                height={50}
                width={100}
                src={"/icons/office.svg"}
                alt="logo"
                className="w-full h-full"
              />
            </figure>
          </div>
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
        <div className="px-[28px] pt-[28px] bg-[#FDFDFD] ">
          <Office />
        </div>
      </div>
    </div>
  );
}

export default Address;
