import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Stepper } from "@mantine/core";
import FirstStepper from "./firststepper";
import Image from "next/image";
import SecondStepper from "./secondstepper";
import ThirdStepper from "./thirdstepper";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

export function CreateCard({ opened, close }: IModalProps) {
  const [active, setActive] = useState(1);
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
            <FirstStepper />
          </Stepper.Step>

          <Stepper.Step completedIcon={<span>2</span>}>
            <SecondStepper />
          </Stepper.Step>

          <Stepper.Step completedIcon={<span>3</span>}>
            <ThirdStepper />
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
