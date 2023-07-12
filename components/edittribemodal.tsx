import React, { useState } from "react";
import { Button, Group, Modal, TextInput, Select } from "@mantine/core";
import Image from "next/image";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

function EditTribeModal({ opened, close }: IModalProps) {
  const [active, setActive] = useState(1);

  return (
    <Modal
      size={452}
      opened={opened}
      onClose={close}
      title="Create Tribe"
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
      <TextInput
        placeholder="Enter Name"
        label="Tribe Name"
        classNames={{
          root: "flex flex-col gap-3 mt-8",
          input:
            "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-full rounded-lg border-[2px] border-[#DADADD]",
          label: "text-[#4A4C58] text-sm",
        }}
      />

      <TextInput
        placeholder="Enter Description"
        label="Tribe Description"
        classNames={{
          root: "flex flex-col gap-3 mt-8",
          input:
            "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-full rounded-lg border-[2px] border-[#DADADD]",
          label: "text-[#4A4C58] text-sm",
        }}
      />

      <Select
        label="Assign Tribe Lead"
        placeholder="Select Member"
        data={[{ value: "innovation", label: "Innovation Lab" }]}
        classNames={{
          root: "outline-transparent mt-8",
          input:
            "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-full rounded-lg border-[2px] border-[#DADADD]",
          label: "text-[#4A4C58] text-sm",
        }}
      />
      <button className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px]  font-medium cursor-pointer w-full flex items-center justify-center mt-8">
        <p>Create Tribe</p>
      </button>
    </Modal>
  );
}
export default EditTribeModal;
