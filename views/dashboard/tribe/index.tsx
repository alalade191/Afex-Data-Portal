import React, { useEffect, useState } from "react";
import Export from "@/components/export";
import { useDisclosure } from "@mantine/hooks";
import Search from "@/components/search";
import Tribemodal from "@/components/tribemodal";
import TribeList from "@/components/tribelisttable";
import Image from "next/image";
import withAuth from "@/pages/routing-protection";
export interface Itribe {
  name: string;
  description: string;
  tribe_lead?: string;
}
const Tribe = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [tribe, setTribe] = useState([]);

  const Tribedata = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userlogin") as string)
        ?.tokens?.access;
      const res = await fetch(
        "https://web-production-029d.up.railway.app/api/tribes/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setTribe(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Tribedata();
  }, []);

  return (
    <div className="flex overflow-auto flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <Export />
          <Search />
        </div>
        <button
          className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px] px-[24px] font-medium
             transition-transform duration-300 transform-gpu hover:scale-105"
          onClick={open}
        >
          Create tribe
        </button>
        <Tribemodal opened={opened} close={close} />
        {/* <DeactivateCard opened={opened} close={close} /> */}
      </div>
      <div className="border-t border-b border-[#D9DFE4] mt-6 pt-4 pb-1">
        <div className="flex items-center gap-1 hover:border-b-[2px] hover:border-[#D9DFE4] w-[80px]">
          <p className="text-sm font-medium text-[#4A4C58]">Tribe list </p>
          <span className="h-[16px] rounded-full w-[16px] pl-1 flex items-center bg-[#F7F9FC] font-semibold text-xs text-[#8F9198]">
            0
          </span>
        </div>
      </div>

      <TribeList tribe={tribe} />
    </div>
  );
};
export default withAuth(Tribe);
function Tribedata() {
  throw new Error("Function not implemented.");
}
