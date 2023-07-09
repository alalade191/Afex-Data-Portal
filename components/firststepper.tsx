import React from "react";
import Image from "next/image";
import { Button, PasswordInput, TextInput, px, Select } from "@mantine/core";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Link from "next/link";

const FirstStepper = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-normal text-[#4A4C58] pb-2">
          Upload Members picture
        </p>
        <p className="font-medium text-sm text-[#C1C2C6]">(Required)</p>
      </div>

      <Dropzone
        onDrop={(files) => console.log("accepted files", files)}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        styles={{
          root: {
            border: "2px dashed #DADADD",
            "&:hover": {
              border: "1px dashed #DADADD",
            },
          },
        }}
      >
        <Group
          className="flex flex-col"
          position="center"
          spacing="xl"
          style={{ minHeight: px(40), pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload size="3.2rem" stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size="3rem" stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <div className="flex items-center gap-1 justify-center">
              <Image
                src={"/icons/image-upload.svg"}
                alt={"image-upload"}
                width={26}
                height={26}
              />
              <p className="text-sm font-medium text-[#8F9198]">
                Drop files to attach or{" "}
                <span className="text-[#458EE6] ">
                  <Link href={"https://www.google.com"}>browse</Link>
                </span>
              </p>
            </div>
          </Dropzone.Idle>
        </Group>
      </Dropzone>
      <p className="font-medium text-xs text-[#C1C2C6] pt-2">
        You can upload files in the following format in .pdf, .xls, .doc (Size
        limit 10mb)
      </p>

      <div className="flex items-center justify-center gap-6">
        <TextInput
          placeholder="Enter Name"
          label="First Name"
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <TextInput
          placeholder="Enter Name"
          label="Last Name"
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-6 pt-[15px]">
        <TextInput
          placeholder="Enter Name"
          label="Middle Name (OPtional)"
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <TextInput
          placeholder="Enter Mobile Number"
          label="Phone Number"
          classNames={{
            root: "flex flex-col gap-3 mt-8",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-6 pt-[15px] pb-[25px]">
        <Select
          label="Gender"
          placeholder="Select Gender"
          data={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          classNames={{
            root: "outline-transparent",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <Select
          label="Marital Status"
          placeholder="Select Marital Status"
          data={[
            { value: "divorced", label: "Divorced" },
            { value: "married", label: "Married" },
            { value: "single", label: "Single" },
            { value: "widowed", label: "Widowed" },
          ]}
          classNames={{
            root: "outline-none",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />
      </div>
    </div>
  );
};

export default FirstStepper;
