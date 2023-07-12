import React from "react";
import Image from "next/image";
import { Button, PasswordInput, TextInput, px, Select } from "@mantine/core";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Link from "next/link";
import EditStaffListModal1 from "./edit-stafflist-modal1";

const EditStaffListModal2 = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-[6px]">
          <TextInput
            placeholder="Username"
            label="Official Email Address"
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
            classNames={{
              root: "flex flex-col gap-3 mt-5",
              input:
                "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[194.5px] mt-[28px] rounded-lg border-[2px] border-[#DADADD]",
              label: "text-[#4A4C58] text-sm",
            }}
          />
        </div>
        {/* second */}
        <div className="flex items-center justify-center gap-[6px]">
          <TextInput
            placeholder="Username"
            label="Taggable Aliases"
            classNames={{
              root: "flex flex-col gap-3 mt-5",
              input:
                "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[194.5px] rounded-lg border-[2px] border-[#DADADD]",
              label: "text-[#4A4C58] text-sm",
            }}
          />

          <Select
            label="Gender"
            placeholder="Select email domain"
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
                "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[194.5px] rounded-lg border-[2px] border-[#DADADD]",
              label: "text-[#4A4C58] text-sm",
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 pt-[15px]">
        <Select
          label="Tribe/Department"
          placeholder="Select Tribe/Department"
          data={[
            { value: "innovation", label: "Innovation" },
            { value: "technology", label: "Technology" },
          ]}
          classNames={{
            root: "outline-transparent mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <Select
          label="Squad/Unit"
          placeholder="Select Squad/Unit"
          data={[
            { value: "innovation", label: "Innovation Lab" },
            { value: "design and app", label: "Design and Apps" },
          ]}
          classNames={{
            root: "outline-transparent mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-6 pt-[15px] pb-[25px]">
        <TextInput
          placeholder="Input Designation"
          label="Designation"
          classNames={{
            root: "flex flex-col gap-3 mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <TextInput
          placeholder="Enter Phone Number"
          label="Work Phone"
          classNames={{
            root: "flex flex-col gap-3 mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-6">
        <Select
          label="Region (Country)"
          placeholder="Select Country"
          data={[
            { value: "andorra", label: "Andorra" },
            { value: "united", label: "United Arab Emirate" },
          ]}
          classNames={{
            root: "outline-transparent mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <Select
          label="City Address"
          placeholder="Select City"
          data={[
            { value: "abuja", label: "Abuja, FCT" },
            { value: "ibadan", label: "Ibadan, Oyo State" },
            { value: "lagos", label: "Lagos State" },
          ]}
          classNames={{
            root: "outline-transparent mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>
    </div>
  );
};

export default EditStaffListModal2;
