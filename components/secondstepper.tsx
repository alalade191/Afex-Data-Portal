import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Button,
  PasswordInput,
  TextInput,
  px,
  Select,
  MultiSelect,
} from "@mantine/core";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Link from "next/link";
import { Idata } from "./modal";
import useOrganizationRequests from "@/hooks/use-organization-requests";
interface Data {
  secondState: Idata;
  setSecondState: (val: Idata) => void;
}
const SecondStepper = ({ secondState, setSecondState }: Data) => {
  const { cities, location, squad, tribes, setCountry } =
    useOrganizationRequests(secondState.tribe);
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-[6px]">
          <TextInput
            placeholder="Username"
            value={secondState.username}
            onChange={(e) => {
              setSecondState({
                ...secondState,
                // username: `${e.target.value}@africaexchange.com`,
                username: e.target.value,
              });
            }}
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
            value={secondState.email}
            onChange={(e) => {
              setSecondState({
                ...secondState,
                email: e.target.value,
              });
            }}
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
            value={secondState.username}
            disabled
            classNames={{
              root: "flex flex-col gap-3 mt-5",
              input:
                "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[194.5px] rounded-lg border-[2px] border-[#DADADD]",
              label: "text-[#4A4C58] text-sm",
            }}
          />

          <Select
            label=""
            placeholder="Select email domain"
            value={secondState.alias_email}
            onChange={(value) => {
              setSecondState({
                ...secondState,
                alias_email: value as string,
              });
            }}
            data={[
              { value: "africaexchange.com", label: "africaexchange.com" },
              { value: "afex.africa", label: "afex.africa" },
              { value: "afexnigeria.com", label: "afexnigeria.com" },
              { value: "afexuganda.com", label: "afexuganda.com" },
              { value: "afexkenya.com", label: "afexkenya.com" },
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
          value={secondState.tribe}
          onChange={(value) => {
            setSecondState({
              ...secondState,
              tribe: value,
            });
          }}
          data={tribes}
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
          value={secondState.squad}
          onChange={(value) => {
            setSecondState({
              ...secondState,
              squad: value,
            });
          }}
          data={squad}
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
          value={secondState.role}
          onChange={(e) => {
            setSecondState({
              ...secondState,
              role: e.target.value,
            });
          }}
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
          value={secondState.phone}
          onChange={(e) => {
            setSecondState({
              ...secondState,
              phone: e.target.value,
            });
          }}
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
          onChange={(value) => {
            setCountry(value);
          }}
          data={location}
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
          value={secondState.address}
          onChange={(value) => {
            setSecondState({
              ...secondState,
              address: value as string,
            });
          }}
          data={cities}
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

export default SecondStepper;
