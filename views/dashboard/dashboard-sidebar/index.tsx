import Image from "next/image";
import React from "react";
import { useState } from "react";
import { clsx } from "@mantine/core";
const DashboardSidebar = () => {
  interface Sidebar {
    image: string;
    text: string;
  }
  const sidebarlist: Sidebar[] = [
    { image: "/icons/home.svg", text: "Dashboard Overview" },
    { image: "/icons/briefcase.svg", text: "Staff Management" },
    { image: "/icons/people.svg", text: "Tribes" },
    { image: "/icons/location.svg", text: "Office Address" },

    // { image: "/icons/user.svg", text: "Profile" },
    // { image: "/icons/logout.svg", text: "Logout" },
  ];
  const adminlist: Sidebar[] = [
    { image: "/icons/user.svg", text: "Profile" },
    { image: "/icons/logout.svg", text: "Logout" },
  ];
  const [selected, setSelected] = useState(0);
  const [adminselect, setAdminselect] = useState(null);

  return (
    <div>
      <div className="flex flex-col gap-5 pt-8">
        {sidebarlist.map((list, i) => (
          <div
            key={list.text}
            onClick={() => {
              setSelected(i);
            }}
          >
            <div
              className={clsx(
                selected === i ? "bg-[#E1E5FA]" : "bg-transparent",
                selected === i ? "text-[#3045BC]" : "bg-transparent",
                "flex items-center gap-2 mx-auto w-[186px] p-[8px] rounded-lg"
              )}
            >
              <figure className="w-[20px] h-[20px]">
                <Image
                  height={20}
                  width={20}
                  src={list.image}
                  alt="sidebarimages"
                  className="w-full h-full"
                />
              </figure>
              <div>
                <p className="text-[14px] font-semibold">{list.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* admin */}

      <div className="flex flex-col gap-5 pt-8">
        <p className="pl-[30px] text-base text-[#8F9198] font-medium">Admin</p>
        {adminlist.map((admin, i) => (
          <div
            key={admin.text}
            onClick={() => {
              setAdminselect(i);
            }}
          >
            <div
              className={clsx(
                adminselect === i ? "bg-[#E1E5FA]" : "bg-transparent",
                "flex items-center gap-2 mx-auto w-[186px] p-[8px] rounded-lg"
              )}
            >
              <figure className="w-[20px] h-[20px]">
                <Image
                  height={20}
                  width={20}
                  src={admin.image}
                  alt="sidebarimages"
                  className="w-full h-full"
                />
              </figure>
              <div>
                <p className="text-[14px] font-semibold">{admin.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DashboardSidebar;
