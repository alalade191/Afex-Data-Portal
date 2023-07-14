import React, { useState } from "react";
import { Button, Group, Modal, TextInput, Select } from "@mantine/core";
import Image from "next/image";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

function EditTribeModal({ opened, close }: IModalProps) {
  const [active, setActive] = useState(1);

  return (
    <Modal
      size={173}
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
      <section>
        <div className="flex items-center gap-1">
          <Image height={} width={} src={} alt="" />
          <span>Update memeber</span>
        </div>

        <div className="flex items-center gap-1">
          <Image height={} width={} src={} alt="" />
          <span>View memeber</span>
        </div>

        <div className="flex items-center gap-1">
          <Image height={} width={} src={} alt="" />
          <span>Activate memeber</span>
        </div>
      </section>
      <button className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px]  font-medium cursor-pointer w-full flex items-center justify-center mt-8">
        <p>Create Tribe</p>
      </button>
    </Modal>
  );
}
export default EditTribeModal;
