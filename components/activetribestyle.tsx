import React from "react";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import EditTribeModal from "./edittribemodal";
const ActiveTribeTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex items-center gap-4">
      <Image
        height={50}
        width={50}
        src={"/icons/edit-btn.svg"}
        alt=""
        onClick={open}
      />
      <EditTribeModal opened={opened} close={close} />
      <div className="bg-[#EBEEFC] flex gap-1 items-center border rounded-lg py-1 px-2">
        <span className="text-sm font-normal text-[#3851DD]">View tribe</span>
      </div>
    </div>
  );
};
export default ActiveTribeTable;
