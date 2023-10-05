import React, { useEffect, useState } from "react";
import { Button, Group, Modal, TextInput, Select } from "@mantine/core";
import Image from "next/image";
import { Itribe } from "@/views/dashboard/tribe";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

function TribeModalEdit({ opened, close }: IModalProps) {
  const [active, setActive] = useState(1);
  const [tribeedit, setTribeedit] = useState<Itribe>({
    name: "",
    description: "",
    tribe_lead: "",
  });
  const [secondtribe, setSecondtribe] = useState(null);
  useEffect(() => {
    Editget;
  }, []);

  const Editget = async () => {
    const token = JSON.parse(localStorage.getItem("userlogin"))?.tokens?.access;
    try {
      const response = await fetch(
        "https://web-production-029d.up.railway.app/api/staff/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setSecondtribe(
        data.results.reduce((acc, curr) => {
          acc.push({ label: curr.name, value: curr.id });
          return acc;
        }, [])
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTribe = async () => {
    const token = JSON.parse(localStorage.getItem("userlogin"))?.tokens?.access;
    try {
      const res = await fetch(
        "https://web-production-029d.up.railway.app/api/tribes/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...tribeedit,
            tribe_lead: +tribeedit.tribe_lead,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data?.tribe_lead?.message) {
        alert(data?.tribe_lead?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      size={452}
      opened={opened}
      onClose={close}
      title="Create Tribe"
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
      <TextInput
        placeholder="Enter Name"
        label="Tribe Name"
        value={tribeedit.name}
        onChange={(e) =>
          setTribeedit({
            ...tribeedit,
            name: e.target.value,
          })
        }
        classNames={{
          root: "flex flex-col gap-3 mt-8",
          input:
            "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-full rounded-lg border-[2px] border-[#DADADD]",
          label: "text-[#4A4C58] text-sm",
        }}
      />

      <TextInput
        placeholder="Enter Description"
        label="Tribe Description"
        value={tribeedit.description}
        onChange={(e) =>
          setTribeedit({
            ...tribeedit,
            description: e.target.value,
          })
        }
        classNames={{
          root: "flex flex-col gap-3 mt-8",
          input:
            "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-full rounded-lg border-[2px] border-[#DADADD]",
          label: "text-[#4A4C58] text-sm",
        }}
      />

      <Select
        label="Assign Tribe Lead"
        placeholder="Select Member"
        value={tribeedit.tribe_lead}
        onChange={(value) =>
          setTribeedit({
            ...tribeedit,
            tribe_lead: value as string,
          })
        }
        data={secondtribe}
        classNames={{
          root: "outline-transparent mt-8",
          input:
            "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-full rounded-lg border-[2px] border-[#DADADD]",
          label: "text-[#4A4C58] text-sm",
        }}
      />
      <button className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px]  font-medium cursor-pointer w-full flex items-center justify-center mt-8">
        <p>Create Tribe</p>
      </button>
    </Modal>
  );
}
export default TribeModalEdit;
