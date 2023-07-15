import React, { useEffect, useState } from "react";
import Export from "@/components/export";
import FilterSearch from "@/components/filtersearch";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { CreateCard } from "@/components/modal";
import { Table } from "@mantine/core";
import ActiveTable from "@/components/activestafflisttablestyle";
import StaffList from "@/components/stafflisttable";
import DeactivateCard from "@/components/deactivatemodal";
import SucessCard from "@/components/sucessmodal";
import PersonalStepper from "@/modals/personal-stepper";
import { IDasboard } from "../dashboard-overview";
import withAuth from "@/pages/routing-protection";

export interface IStaffList {
  email: string;
  id: number;
  name: string;
  phone_number: string;
  squad: number;
  status: boolean;
  tribe: number;
  unique_id: null | any;
  url: string;
}

const StaffManagement = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [successOpened, { open: openSuccess, close: closeSuccess }] =
    useDisclosure(false);
  const [view, setView] = useState<IStaffList[]>(null);

  const viewdata = async () => {
    const token = JSON.parse(localStorage.getItem("userlogin") as string)
      ?.tokens?.access;
    const res = await fetch(
      "https://expertportal-production.up.railway.app/api/staff/",
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
    setView(data.results);
  };

  useEffect(() => {
    viewdata();
  }, []);
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <Export />
          <FilterSearch />
        </div>
        <button
          onClick={() => open()}
          className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px] px-[24px] font-medium
             transition-transform duration-300 transform-gpu hover:scale-105"
        >
          Add member
        </button>
        <SucessCard opened={successOpened} close={closeSuccess} />
        {/* <DeactivateCard opened={opened} close={close} /> */}
      </div>
      <div className="border-t border-b border-[#D9DFE4] mt-6 pt-4 pb-1">
        <div className="flex items-center gap-1 hover:border-b-[2px] hover:border-[#D9DFE4] w-[80px]">
          <p className="text-xsfont-medium text-[#4A4C58]">Staff list </p>
          <span className="h-[16px] rounded-full w-[16px] pl-1 flex items-center bg-[#F7F9FC] font-semibold text-xs text-[#8F9198]">
            {view?.length}
          </span>
        </div>
      </div>
      {view?.length ? (
        <StaffList tableData={view} />
      ) : (
        <div className="flex flex-col flex-1 items-center justify-center">
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
             transition-transform duration-300 transform-gpu hover:scale-105 flex gap-1 justify-center items-center"
            >
              <Image
                height={20}
                width={20}
                src={"/icons/plus-icon.svg"}
                alt="iconplus"
              />
              <span>Add new member</span>
            </button>
          </div>
        </div>
      )}
      <CreateCard openSuccess={openSuccess} opened={opened} close={close} />
    </div>
  );
};
export default StaffManagement;
// export default withAuth(StaffManagement);
