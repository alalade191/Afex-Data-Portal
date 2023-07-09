import React from "react";
import Export from "@/components/export";
import FilterSearch from "@/components/filtersearch";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { CreateCard } from "@/components/modal";
import { Table } from "@mantine/core";
import ActiveTable from "@/components/activetablestyle";
import StaffList from "@/components/stafflist";
import DeactivateCard from "@/components/deactivatemodal";
import SucessCard from "@/components/sucessmodal";

const StaffManagement = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <Export />
          <FilterSearch />
        </div>
        <button
          className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px] px-[24px] font-medium
             transition-transform duration-300 transform-gpu hover:scale-105"
          onClick={open}
        >
          Add member
        </button>
        {/* <SucessCard opened={opened} close={close} /> */}
        <DeactivateCard opened={opened} close={close} />
      </div>
      <div className="border-t border-b border-[#D9DFE4] mt-6 pt-4 pb-1">
        <div className="flex w-full items-center gap-1">
          <p className="text-xsfont-medium text-[#4A4C58]">Staff list </p>
          <span className="h-[16px] rounded-full w-[16px] pl-1 flex items-center bg-[#F7F9FC] font-semibold text-xs text-[#8F9198]">
            0
          </span>
        </div>
      </div>

      {/* <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <figure className="w-[200px] h-[200px]">
            <Image
              height={50}
              width={50}
              src={"/icons/staff-list.svg"}
              alt="staff list"
              className="w-full h-full"
            />
          </figure>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-center text-2xl text-[#5E606A]">
              Staff list empty
            </h3>
            <p className="font-normal text-sm text-[#5E606A] max-w-[260px] text-center">
              You are yet to onboard any staff, a list of staff created will
              appear here
            </p>
          </div>
          <button
            onClick={open}
            className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px] mt-[20px] px-[24px] font-medium
             transition-transform duration-300 transform-gpu hover:scale-105"
          >
            + Add member
          </button>
          <CreateCard opened={opened} close={close} />
        </div>
      </div> */}
      <StaffList />
      {/* <StaffList /> */}
    </div>
  );
};
export default StaffManagement;
