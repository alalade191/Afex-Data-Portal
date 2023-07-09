import { Modal } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

interface IModalProps {
  opened: boolean;
  close: () => void;
}
function SucessCard({ opened, close }: IModalProps) {
  return (
    <Modal
      size={499}
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
      }}
    >
      {/* Modal content */}

      <div className="flex flex-col items-center justify-center bg-red-300">
        <figure>
          <Image
            height={150}
            width={150}
            src={"/images/staff-success.png"}
            alt="success alert"
          />
        </figure>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className=" text-base font-normal text-[#4A4C58] max-w-[185px]">
            Staff created successfully{" "}
          </h3>
          <button className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px] px-[24px] font-medium cursor-pointer">
            <Link href="">View Staff List</Link>
          </button>
        </div>
      </div>
    </Modal>
  );
}
export default SucessCard;
