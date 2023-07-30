import React, { useState } from "react";
import { Button, Group, Modal, TextInput, Select, Switch } from "@mantine/core";
import Image from "next/image";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

function Officemodal({ opened, close }: IModalProps) {
  const [active, setActive] = useState(1);

  return (
    <Modal
      size={443}
      opened={opened}
      onClose={close}
      title="Add Address"
      centered
      className="custom-modal"
      classNames={{
        overlay: "!bg-[rgba(0,0,0,0.2)]",
      }}
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
        placeholder="Full address of the office location"
        label="Office Address"
        classNames={{
          root: "flex flex-col gap-3 mt-8",
          input:
            "h-[80px] outline-none pl-4 text-xs text-[#C1C2C6] w-full rounded-lg border-[2px] border-[#DADADD]",
          label: "text-[#4A4C58] text-sm",
        }}
      />

      <div className="flex items-center justify-between">
        <Select
          label="Region (Country)"
          placeholder="Select Country"
          data={[{ value: "nigeria", label: "Nigeria" }]}
          classNames={{
            root: "outline-transparent mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-full rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <p className="font-medium text-sm text-[#3851DD] cursor-text">
          Add New Region
        </p>
      </div>

      <div className="flex items-center justify-between">
        <TextInput
          placeholder="Latitude (e.g. 9.356767 N)"
          label="Office Coordinate"
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[50px] outline-none pl-4 text-xs text-[#C1C2C6] w-full rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <TextInput
          placeholder="Longitude (e.g. 7.356700 E)"
          label="Longitude (e.g. 7.356700 E)"
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[50px] outline-none pl-4 text-xs text-[#C1C2C6] w-full rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>
      <div className="flex items-center gap-5 mt-8">
        <p className="font-medium text-sm text-[#54565B]">Set as Headquarter</p>
        <Switch
          label=""
          classNames={{
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>
      <button className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px]  font-medium cursor-pointer w-full flex items-center justify-center mt-8">
        <p>Save changes</p>
      </button>
    </Modal>
  );
}
export default Officemodal;
