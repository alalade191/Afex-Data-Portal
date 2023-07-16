import Image from "next/image";
import React from "react";
import { useState } from "react";
import { clsx } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
interface Sidebar {
  image: string;
  text: string;
  link?: string;
}
const DashboardSidebar = () => {
  const sidebarlist: Sidebar[] = [
    {
      image: "/icons/home.svg",
      text: "Dashboard Overview",
      link: "/overview",
    },
    {
      image: "/icons/briefcase.svg",
      text: "Staff Management",
      link: "/staff-management",
    },
    { image: "/icons/people.svg", text: "Tribes", link: "/tribe" },
    {
      image: "/icons/location.svg",
      text: "Office Address",
      link: "/address",
    },

    // { image: "/icons/user.svg", text: "Profile" },
    // { image: "/icons/logout.svg", text: "Logout" },
  ];
  const adminlist: Sidebar[] = [
    { image: "/icons/user.svg", text: "Profile", link: "/profile" },
    {
      image: "/icons/logout.svg",
      text: "Logout",
      // link: "/landingpage",
      link: "",
    },
  ];
  const [selected, setSelected] = useState(0);

  const [adminselect, setAdminselect] = useState(null);
  const router = useRouter();

  const Logout = () => {
    localStorage.clear();
    router.push("/landingpage");
    console.log("logout");
  };
  return (
    <div className="">
      <div className="flex flex-col gap-5 pt-8">
        {sidebarlist.map((list, i) => (
          <div
            key={list.text}
            onClick={() => {
              setSelected(i);
              setAdminselect(null);
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
                <Link href={list.link}>
                  <p className="text-[14px] dark:text-[#1A212E] font-semibold">
                    {list.text}
                  </p>
                </Link>
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
              if (i === 1) {
                Logout();
                return;
              }
              setAdminselect(i);
              setSelected(null);
            }}
          >
            <div
              className={clsx(
                adminselect === i ? "bg-[#E1E5FA]" : "bg-transparent",
                adminselect === i ? "text-[#3045BC]" : "bg-transparent",
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
                <Link href={admin.link}>
                  <p className="text-[14px] font-semibold">{admin.text}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DashboardSidebar;
