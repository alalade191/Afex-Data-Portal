import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Stepper } from "@mantine/core";
import FirstStepper from "./firststepper";
import Image from "next/image";
import SecondStepper from "./secondstepper";
import ThirdStepper from "./thirdstepper";
import ConfirmOfficeDelete from "./confirmofficedelete";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

function DeleteOfficemodal({ opened, close }: IModalProps) {
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
          <p className="font-medium text-base text-[#4A4C58]">
            Delete Address?
          </p>
          <h3 className=" text-sm font-normal text-[#4A4C58] max-w-[500px] text-center">
            You are about to delete this address. Click the delete button below
            if you would like to continue?
          </h3>

          <div className="flex items-center gap-3">
            <button className="text-sm text-white bg-[#8B908B] rounded-lg py-[6px]  font-medium cursor-pointer flex items-center justify-center gap-2 w-[205px]">
              <Image height={20} width={20} src={"/icons/delete.svg"} alt="" />{" "}
              <p>Cancel</p>
            </button>
            <button className="text-sm text-white bg-[#C81107] rounded-lg py-[6px]  font-medium cursor-pointer w-[205px] flex items-center justify-center">
              <p>Delete</p>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default DeleteOfficemodal;
