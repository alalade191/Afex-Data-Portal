import React from "react";
import Image from "next/image";
import { Button, PasswordInput, TextInput, px, Select } from "@mantine/core";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Link from "next/link";
import { Idata } from "./modal";
import { json } from "stream/consumers";

interface Data {
  thirdState: Idata;
  setThirdState: (val: Idata) => void;
}

const ThirdStepper = ({ thirdState, setThirdState }: Data) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        <TextInput
          placeholder="Enter Name"
          label="First Name"
          value={thirdState.next_of_kin_first_name}
          onChange={(e) => {
            setThirdState({
              ...thirdState,
              next_of_kin_first_name: e.target.value,
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
          placeholder="Enter Name"
          value={thirdState.next_of_kin_last_name}
          onChange={(e) => {
            setThirdState({
              ...thirdState,
              next_of_kin_last_name: e.target.value,
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
          value={thirdState.middle_name}
          onChange={(e) => {
            setThirdState({
              ...thirdState,
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
          value={thirdState.phone_number}
          onChange={(e) => {
            setThirdState({
              ...thirdState,
              phone_number: e.target.value,
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
          value={thirdState.next_of_kin_email}
          onChange={(e) => {
            setThirdState({
              ...thirdState,
              next_of_kin_email: e.target.value,
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
          value={thirdState.next_of_kin_relationship}
          onChange={(e) => {
            setThirdState({
              ...thirdState,
              next_of_kin_relationship: e.target.value,
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

export default ThirdStepper;
