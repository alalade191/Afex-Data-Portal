import React from "react";
import Export from "@/components/export";
import { useDisclosure } from "@mantine/hooks";
import Search from "@/components/search";
import Tribemodal from "@/components/tribemodal";
import TribeList from "@/components/tribelisttable";
import Image from "next/image";

const Tribe = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex flex-col">
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
            onClick={open}
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
          <Tribemodal opened={opened} close={close} />
        </div>
      </div>
      {/* <StaffList /> */}
    </div>
  );
};
export default Tribe;
