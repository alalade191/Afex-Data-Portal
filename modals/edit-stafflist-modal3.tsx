import React from "react";
import Image from "next/image";
import { Button, PasswordInput, TextInput, px, Select } from "@mantine/core";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Link from "next/link";
import { Idata } from "./parent-modal-for-stafflist";

interface Data {
  thirdEdit: Idata;
  SetthirdEdit: (val: Idata) => void;
}
const EditStaffListModal3 = ({ thirdEdit, SetthirdEdit }: Data) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        <TextInput
          placeholder="Enter Name"
          label="First Name"
          value={thirdEdit.first_name}
          onChange={(e) => {
            SetthirdEdit({
              ...thirdEdit,
              first_name: e.target.value,
            });
          }}
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <TextInput
          placeholder="Enter Name"
          value={thirdEdit.last_name}
          onChange={(e) => {
            SetthirdEdit({
              ...thirdEdit,
              last_name: e.target.value,
            });
          }}
          label="Last Name"
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-6 pt-[15px]">
        <TextInput
          placeholder="Enter Name"
          value={thirdEdit.middle_name}
          onChange={(e) => {
            SetthirdEdit({
              ...thirdEdit,
              middle_name: e.target.value,
            });
          }}
          label="Middle Name (OPtional)"
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <TextInput
          placeholder="Enter Mobile Number"
          label="Phone Number"
          value={thirdEdit.phone_number}
          onChange={(e) => {
            SetthirdEdit({
              ...thirdEdit,
              first_name: e.target.value,
            });
          }}
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-6 pt-[15px]">
        <TextInput
          placeholder="Enter Email Address"
          label="Email Address"
          value={thirdEdit.email_address}
          onChange={(e) => {
            SetthirdEdit({
              ...thirdEdit,
              email_address: e.target.value,
            });
          }}
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <TextInput
          placeholder="e.g. mother"
          label="Relationship"
          value={thirdEdit.first_name}
          onChange={(e) => {
            SetthirdEdit({
              ...thirdEdit,
              relationship: e.target.value,
            });
          }}
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>
    </div>
  );
};

export default EditStaffListModal3;
