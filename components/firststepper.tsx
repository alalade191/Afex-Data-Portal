import React, { useState } from "react";
import Image from "next/image";
import { Button, PasswordInput, TextInput, px, Select } from "@mantine/core";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Link from "next/link";
import { Idata } from "./modal";

interface Data {
  dataState: Idata;
  SetDataState: (val: Idata) => void;
}
const FirstStepper = ({ dataState, SetDataState }: Data) => {
  const [imgPreview, setImgPreview] = useState("");
  const [imgSize, setImgSize] = useState(0);
  const [fileName, setFileName] = useState("");
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-normal text-[#4A4C58] pb-2">
          Upload Members picture
        </p>
        <p className="font-medium text-sm text-[#C1C2C6]">(Required)</p>
      </div>

      {/* <Dropzone
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
      </Dropzone> */}
      <Dropzone
        onDrop={(files) => {
          const reader = new FileReader();
          SetDataState({
            ...dataState,
            picture: files[0],
          });
          setFileName(files[0].name);
          setImgSize(files[0].size);
          const data = files[0].size;
          console.log(data / 1024);
          reader.readAsDataURL(files[0]);

          reader.onload = () => {
            setImgPreview(reader.result as string);
          };
        }}
        // onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        styles={{
          root: {
            border: "1px dashed #C81107",
            "&:hover": {
              border: "1px dashed #6D0802",
            },
          },
        }}
      >
        <Group
          className="flex flex-col"
          position="center"
          spacing="xl"
          style={{ minHeight: rem(220), pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload size="3.2rem" stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size="3.2rem" stroke={1.5} />
          </Dropzone.Reject>
          {imgPreview ? (
            <div className=" flex flex-col gap-2 justify-center items-center">
              <div className="rounded-[11px] p-[1px] border border-[#7C827D]">
                <Image src={imgPreview} alt="" width={150} height={150} />
              </div>
              <div className="flex justify-between items-center gap-4">
                <span className=" text-davy-grey text-14 ">{fileName}</span>
                <span className=" text-phillipine-silver text-[10px]">
                  {imgSize}MB Image
                </span>
              </div>
            </div>
          ) : (
            <>
              <Dropzone.Idle>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <Image
                    src={"/create-card/upload.png"}
                    alt={"upload"}
                    width={47.73}
                    height={47.73}
                  />
                  <p className=" text-phillipine-silver text-[8.37px] ">
                    image, smaller than 10MB
                  </p>
                </div>
              </Dropzone.Idle>

              <div className="flex flex-col gap-2 justify-center items-center">
                <Text size="xl" inline className=" text-[10.05px] text-dim ">
                  Drag and drop your file here or
                </Text>
              </div>

              <Link href={"/"}>
                <Button
                  className="w-full text-engineering rounded-lg mt-2"
                  styles={{
                    root: {
                      background: "#F8E7E7 !important",
                      height: "50px",
                      "&:hover": {
                        background: " !important ",
                      },
                    },
                  }}
                >
                  Choose File
                </Button>
              </Link>
            </>
          )}
        </Group>
      </Dropzone>
      <p className="font-medium text-xs text-[#C1C2C6] pt-2">
        You can upload files in the following format in .pdf, .xls, .doc (Size
        limit 10mb)
      </p>

      <div className="flex items-center justify-center gap-6">
        <TextInput
          placeholder="Enter Name"
          value={dataState.first_name}
          onChange={(e) => {
            SetDataState({
              ...dataState,
              first_name: e.target.value,
            });
          }}
          label="First Name"
          classNames={{
            root: "flex flex-col gap-3 mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <TextInput
          placeholder="Enter Name"
          value={dataState.last_name}
          onChange={(e) => {
            SetDataState({
              ...dataState,
              last_name: e.target.value,
            });
          }}
          label="Last Name"
          classNames={{
            root: "flex flex-col gap-3 mt-5",
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
          value={dataState.middle_name}
          onChange={(e) => {
            SetDataState({
              ...dataState,
              middle_name: e.target.value,
            });
          }}
          classNames={{
            root: "flex flex-col gap-3 mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <TextInput
          placeholder="Enter Mobile Number"
          label="Phone Number"
          value={dataState.phone_number}
          onChange={(e) => {
            SetDataState({
              ...dataState,
              phone_number: e.target.value,
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

      <div className="flex items-center justify-center gap-6 pt-[15px] pb-[25px]">
        <Select
          label="Gender"
          placeholder="Select Gender"
          value={dataState.gender}
          onChange={(value) => {
            SetDataState({
              ...dataState,
              gender: value as string,
            });
          }}
          data={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          classNames={{
            root: "outline-transparent mt-5",
            input:
              "h-[54px] outline-none pl-4 text-xs text-[#C1C2C6] w-[395px] rounded-lg border-[2px] border-[#DADADD]",
            label: "text-[#4A4C58] text-sm",
          }}
        />

        <Select
          label="Marital Status"
          placeholder="Select Marital Status"
          value={dataState.martial_status}
          onChange={(value) => {
            SetDataState({
              ...dataState,
              martial_status: value as string,
            });
          }}
          data={[
            { value: "Divorced", label: "Divorced" },
            { value: "Married", label: "Married" },
            { value: "Single", label: "Single" },
            { value: "Widowed", label: "Widowed" },
          ]}
          classNames={{
            root: "outline-none mt-5",
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
