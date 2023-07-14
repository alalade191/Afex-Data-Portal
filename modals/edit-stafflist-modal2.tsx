import React from "react";
import Image from "next/image";
import { Button, PasswordInput, TextInput, px, Select } from "@mantine/core";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Link from "next/link";
import EditStaffListModal1 from "./edit-stafflist-modal1";
import { Idata } from "./parent-modal-for-stafflist";

interface Data {
  secondEdit: Idata;
  SetsecondEdit: (val: Idata) => void;
}
const EditStaffListModal2 = ({ secondEdit, SetsecondEdit }: Data) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-[6px]">
          <TextInput
            placeholder="Username"
            label="Official Email Address"
            value={secondEdit.first_name}
            onChange={(e) => {
              SetsecondEdit({
                ...secondEdit,
                username: e.target.value,
              });
            }}
            classNames={{
              root: "flex flex-col gap-3 mt-5",
              input:
                "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[194.5px] rounded-lg  border-[2px] border-[#DADADD]",
              label: "text-[#4A4C58] text-sm",
            }}
          />

          <TextInput
            placeholder="@africaexchange.com"
            label=""
            value={secondEdit.email_address}
            onChange={(e) => {
              SetsecondEdit({
                ...secondEdit,
                email_address: e.target.value,
              });
            }}
            classNames={{
              root: "flex flex-col gap-3 mt-5",
              input:
                "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[194.5px] mt-[28px] rounded-lg border-[2px] border-[#DADADD]",
              label: "text-[#4A4C58] text-sm",
            }}
          />
        </div>
        {/* second */}
        <div className="flex items-center justify-center gap-[6px]">
          <TextInput
            placeholder="Username"
            label="Taggable Aliases"
            value={secondEdit.taggable}
            onChange={(e) => {
              SetsecondEdit({
                ...secondEdit,
                taggable: e.target.value,
              });
            }}
            classNames={{
              root: "flex flex-col gap-3 mt-5",
              input:
                "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[194.5px] rounded-lg border-[2px] border-[#DADADD]",
              label: "text-[#4A4C58] text-sm",
            }}
          />

          <Select
            label="Gender"
            placeholder="Select email domain"
            value={secondEdit.email_address}
            onChange={(value) => {
              SetsecondEdit({
                ...secondEdit,
                email_address: value as string,
              });
            }}
            data={[
              { value: "africa", label: "africaexchange.com" },
              { value: "afex", label: "afex.africa" },
              { value: "afexnigeria", label: "afexnigeria.com" },
              { value: "afexuganda", label: "afexuganda.com" },
              { value: "afexkenya", label: "afexkenya.com" },
            ]}
            classNames={{
              root: "outline-transparent mt-5",
              input:
                "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[194.5px] rounded-lg border-[2px] border-[#DADADD]",
              label: "text-[#4A4C58] text-sm",
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 pt-[15px]">
        <Select
          label="Tribe/Department"
          placeholder="Select Tribe/Department"
          value={secondEdit.tribe}
          onChange={(value) => {
            SetsecondEdit({
              ...secondEdit,
              tribe: value as string,
            });
          }}
          data={[
            { value: "innovation", label: "Innovation" },
            { value: "technology", label: "Technology" },
          ]}
          classNames={{
            root: "outline-transparent mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <Select
          label="Squad/Unit"
          placeholder="Select Squad/Unit"
          value={secondEdit.squard_unit}
          onChange={(value) => {
            SetsecondEdit({
              ...secondEdit,
              squard_unit: value as string,
            });
          }}
          data={[
            { value: "innovation", label: "Innovation Lab" },
            { value: "design and app", label: "Design and Apps" },
          ]}
          classNames={{
            root: "outline-transparent mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-6 pt-[15px] pb-[25px]">
        <TextInput
          placeholder="Input Designation"
          label="Designation"
          value={secondEdit.designation}
          onChange={(e) => {
            SetsecondEdit({
              ...secondEdit,
              designation: e.target.value,
            });
          }}
          classNames={{
            root: "flex flex-col gap-3 mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <TextInput
          placeholder="Enter Phone Number"
          label="Work Phone"
          value={secondEdit.phone}
          onChange={(e) => {
            SetsecondEdit({
              ...secondEdit,
              phone: e.target.value,
            });
          }}
          classNames={{
            root: "flex flex-col gap-3 mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-6">
        <Select
          label="Region (Country)"
          placeholder="Select Country"
          value={secondEdit.region}
          onChange={(value) => {
            SetsecondEdit({
              ...secondEdit,
              region: value as string,
            });
          }}
          data={[
            { value: "andorra", label: "Andorra" },
            { value: "united", label: "United Arab Emirate" },
          ]}
          classNames={{
            root: "outline-transparent mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <Select
          label="City Address"
          placeholder="Select City"
          value={secondEdit.city_address}
          onChange={(value) => {
            SetsecondEdit({
              ...secondEdit,
              city_address: value as string,
            });
          }}
          data={[
            { value: "abuja", label: "Abuja, FCT" },
            { value: "ibadan", label: "Ibadan, Oyo State" },
            { value: "lagos", label: "Lagos State" },
          ]}
          classNames={{
            root: "outline-transparent mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>
    </div>
  );
};

export default EditStaffListModal2;
