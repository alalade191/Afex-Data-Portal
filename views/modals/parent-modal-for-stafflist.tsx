import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Stepper } from "@mantine/core";
import Image from "next/image";
import EditStaffListModal1 from "./edit-stafflist-modal1";
import EditStaffListModal2 from "./edit-stafflist-modal2";
import EditStaffListModal3 from "./edit-stafflist-modal3";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

export interface Idata {
  first_name: string;
  last_name: string;
  middle_name: string;
  phone_number: string;
  gender: string;
  marital_status: string;
  email_address: string;
  taggable: string;
  tribe: string;
  squard_unit: string;
  designation: string;
  phone: string;
  region: string;
  city_address: string;
  relationship: string;
  username: string;
}

export function CreateCard({ opened, close }: IModalProps) {
  const [active, setActive] = useState(0);

  const [editstepdata, SetEditstepdata] = useState<Idata>({
    first_name: "",
    last_name: "",
    middle_name: "",
    phone_number: "",
    gender: "",
    marital_status: "",
    email_address: "",
    taggable: "",
    tribe: "",
    squard_unit: "",
    designation: "",
    phone: "",
    region: "",
    city_address: "",
    relationship: "",
    username: "",
  });

  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Modal
      size={873}
      opened={opened}
      onClose={close}
      title="Create Staff"
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
            <EditStaffListModal1
              firstEdit={editstepdata}
              SetFirstEdit={SetEditstepdata}
            />
          </Stepper.Step>

          <Stepper.Step completedIcon={<span>2</span>}>
            <EditStaffListModal2
              secondEdit={editstepdata}
              SetsecondEdit={SetEditstepdata}
            />
          </Stepper.Step>

          <Stepper.Step completedIcon={<span>3</span>}>
            <EditStaffListModal3
              thirdEdit={editstepdata}
              SetthirdEdit={SetEditstepdata}
            />
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
          onClick={nextStep}
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
          <div className="flex gap-1 items-center text-[#C1C2C6] text-sm font-medium">
            <Image
              height={20}
              width={20}
              src={"/icons/arrow-right.svg"}
              alt="arrowright"
            />
            <p>Next</p>
          </div>
        </Button>
      </Group>
    </Modal>
  );
}
