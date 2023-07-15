import React, { useEffect, useState } from "react";
import { Button, Group, Modal, TextInput, Select } from "@mantine/core";
import Image from "next/image";
import { Itribe } from "@/views/dashboard/tribe";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

function Tribemodal({ opened, close }: IModalProps) {
  const [lead, setLead] = useState(null);
  useEffect(() => {
    leadget();
  }, []);

  const [active, setActive] = useState(1);
  const [tribemodal, setTribemodal] = useState<Itribe>({
    name: "",
    description: "",
    // tribe_lead: "",
  });

  const leadget = async () => {
    const token = JSON.parse(localStorage.getItem("userlogin"))?.tokens?.access;
    try {
      const response = await fetch(
        "https://expertportal-production.up.railway.app/api/staff/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setLead(
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
        "https://expertportal-production.up.railway.app/api/tribes/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...tribemodal,
            // tribe_lead: +tribemodal.tribe_lead,
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
        value={tribemodal.name}
        onChange={(e) =>
          setTribemodal({
            ...tribemodal,
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
        value={tribemodal.description}
        onChange={(e) =>
          setTribemodal({
            ...tribemodal,
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

      {/* <Select
        label="Assign Tribe Lead"
        placeholder="Select Member"
        onChange={(value) =>
          setTribemodal({
            ...tribemodal,
            tribe_lead: value as string,
          })
        }
        data={lead ?? []}
        classNames={{
          root: "outline-transparent mt-8",
          input:
            "h-[54px] outline-none pl-4 text-xs text-[#4A4C58] w-full rounded-lg border-[2px] border-[#DADADD]",
          label: "text-[#4A4C58] text-sm",
        }}
      /> */}
      <button
        onClick={createTribe}
        className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px]  font-medium cursor-pointer w-full flex items-center justify-center mt-8"
      >
        <p>Create Tribe</p>
      </button>
    </Modal>
  );
}
export default Tribemodal;
