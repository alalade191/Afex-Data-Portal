import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Stepper } from "@mantine/core";
import FirstStepper from "./firststepper";
import Image from "next/image";
import SecondStepper from "./secondstepper";
import ThirdStepper from "./thirdstepper";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

function DeactivateCard({ opened, close }: IModalProps) {
  const [active, setActive] = useState(1);

  return (
    <Modal
      size={491}
      opened={opened}
      onClose={close}
      title="Deactivate Member"
      centered
      className="custom-modal"
      styles={{
        root: {},
        content: {
          borderRadius: "12px",
        },
        body: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          // padding: "30px",
        },
        title: {
          color: "#4A4C58",
          fontWeight: 500,
          fontSize: "16px",
          borderBlockEnd: "1px solid #F1F3F5",
          width: "100%",
          paddingBlockEnd: "12px",
        },
      }}
    >
      {/* Modal content */}
      <div className="flex flex-col items-center justify-center">
        <figure>
          <Image
            height={150}
            width={150}
            src={"/images/staff-deactivate.png"}
            alt="success alert"
          />
        </figure>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className=" text-sm font-normal text-[#4A4C58] max-w-[500px] text-center">
            Deactivated members will no longer have access across all platforms.
            Click the buttons below to deactivate according to your preference.
          </h3>

          <div className="flex items-center gap-3">
            <button className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px]  font-medium cursor-pointer flex items-center justify-center gap-2 w-[205px]">
              <Image height={20} width={20} src={"/icons/delete.svg"} alt="" />{" "}
              <p>View Staff List</p>
            </button>
            <button className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px]  font-medium cursor-pointer w-[205px] flex items-center justify-center">
              <p>Deactivate now</p>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default DeactivateCard;
