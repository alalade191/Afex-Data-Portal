import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Stepper } from "@mantine/core";
import FirstStepper from "./firststepper";
import Image from "next/image";
import SecondStepper from "./secondstepper";
import ThirdStepper from "./thirdstepper";
import axios from "axios";
import { fileURLToPath } from "url";
import { FileWithPath } from "react-dropzone";

interface IModalProps {
  opened: boolean;
  close: () => void;
  openSuccess: () => void;
}

export interface Idata {
  first_name: string;
  last_name: string;
  middle_name: string;
  phone_number: string;
  gender: string;
  // marital_status: string;
  martial_status: string;
  email: string;
  alias_email: string;
  tribe: string;
  squad: string;
  phone: string;
  // region: string;
  // city_address: string;
  address: string;
  username: string;
  date_of_birth: string;
  next_of_kin_email: string;
  next_of_kin_last_name: string;
  next_of_kin_first_name: string;
  next_of_kin_relationship: string;
  picture: null | File;
  role: string;
}

export function CreateCard({ opened, openSuccess, close }: IModalProps) {
  const [active, setActive] = useState(0);

  const [stepdata, SetStepdata] = useState<Idata>({
    first_name: "",
    last_name: "",
    middle_name: "",
    phone_number: "",
    gender: "",
    // marital_status: "",
    martial_status: "",
    email: "",
    alias_email: "",
    tribe: "",
    squad: "",
    phone: "",
    username: "",
    date_of_birth: "",
    next_of_kin_email: "",
    next_of_kin_last_name: "",
    next_of_kin_first_name: "",
    next_of_kin_relationship: "",
    picture: null,
    role: "",
    address: "",
  });

  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  // function to submit the form

  const SubmitStaffList = () => {
    const token = JSON.parse(localStorage.getItem("userlogin") as string)
      ?.tokens?.access;
    const formData = new FormData();
    const { username, ...data } = stepdata;
    Object.entries({
      ...data,
      alias_email: `${username}@${data.alias_email}`,
      email: `${username}${data.email}`,
    }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    axios({
      url: "https://expertportal-production.up.railway.app/api/staff/create",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "post",
    })
      .then(function (res) {
        close();
        openSuccess();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Modal
      size={873}
      opened={opened}
      onClose={close}
      title="Create Staff"
      centered
      className="custom-modal scroll-terminate"
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

      <div className=" border-b border-[#F1F3F5] pb-[12px]">
        <h3 className=" mb-6 leading-4 text-gray text-14">
          Personal Information
        </h3>
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          color="#C81107"
          styles={{
            separator: {
              backgroundColor: "#EFF0F6",
              height: "5px",
              borderRadius: "35px",
            },

            separatorActive: {
              backgroundColor: "#C81107",
            },
          }}
        >
          <Stepper.Step completedIcon={<span>1</span>}>
            <FirstStepper dataState={stepdata} SetDataState={SetStepdata} />
          </Stepper.Step>

          <Stepper.Step completedIcon={<span>2</span>}>
            <SecondStepper
              secondState={stepdata}
              setSecondState={SetStepdata}
            />
          </Stepper.Step>

          <Stepper.Step completedIcon={<span>3</span>}>
            <ThirdStepper thirdState={stepdata} setThirdState={SetStepdata} />
          </Stepper.Step>
        </Stepper>
      </div>

      <Group position="center" mt="xl" className="flex justify-between">
        <Button
          variant="default"
          onClick={prevStep}
          disabled={active < 1 ? true : false}
          styles={{
            root: {
              background: "white !important",
              border: "1px solid #B4B4B0 !important",
              //   height: "32px",
              //   width: "82px",
              padding: "6px 22px",
              "&:hover": {
                background: " !important ",
              },
            },
          }}
        >
          <div className="flex gap-1 items-center text-[#C1C2C6] text-sm font-medium">
            <Image
              height={20}
              width={20}
              src={"/icons/arror-left.svg"}
              alt="arrowleft"
            />
            <p>Back</p>
          </div>
        </Button>

        <Button
          // onClick={() => (active < 2 ? nextStep() : console.log(stepdata))}
          onClick={active < 2 ? nextStep : SubmitStaffList}
          styles={{
            root: {
              background: "#3045BC !important",
              padding: "6px 22px",
              color: "white",
              "&:hover": {
                background: " !important ",
              },
            },
          }}
        >
          <span className="flex gap-1 items-center text-[#C1C2C6] text-sm font-medium">
            <Image
              height={20}
              width={20}
              src={"/icons/arrow-right.svg"}
              alt="arrowright"
            />
            <p>Next</p>
          </span>
        </Button>
      </Group>
    </Modal>
  );
}
