import React, { useState } from "react";
import { Button, Group, Modal, TextInput, Select } from "@mantine/core";
import Image from "next/image";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

function EditStaffModal({ opened, close }: IModalProps) {
  const [active, setActive] = useState(1);

  return (
    <Modal
      size={173}
      opened={opened}
      onClose={close}
      title=""
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
      <section className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <Image height={30} width={30} src={"/icons/edit-2.svg"} alt="" />
          <span className="font-medium text-xs text-[#8F9198]">
            Update memeber
          </span>
        </div>

        <div className="flex items-center gap-1">
          <Image height={30} width={30} src={"/icons/eye.svg"} alt="" />
          <span className="font-medium text-xs text-[#8F9198]">
            View memeber
          </span>
        </div>

        <div className="flex items-center gap-1">
          <Image height={30} width={30} src={"/icons/ticksquare.svg"} alt="" />
          <span className="font-medium text-xs text-[#289061]">
            Activate memeber
          </span>
        </div>
      </section>
    </Modal>
  );
}
export default EditStaffModal;
