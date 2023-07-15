import React from "react";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import EditStaffModal from "./update-staff-modal";
const ActiveTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#E7F9F0] flex gap-1 items-center border rounded-3xl py-1 px-2">
        <div className="h-[8px] w-[8px] flex items-center justify-center p-1 bg-[#0DBF66] rounded-full"></div>
        <span className="text-sm font-normal text-[#076D3A]">Active</span>
      </div>
      <Image
        height={30}
        width={30}
        src={"/icons/baseline.svg"}
        alt=""
        onClick={open}
      />
      <EditStaffModal opened={opened} close={close} />
    </div>
  );
};
export default ActiveTable;
