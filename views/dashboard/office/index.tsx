import React, { useEffect, useState } from "react";
import Export from "@/components/export";
import { useDisclosure } from "@mantine/hooks";
import Search from "@/components/search";
import Tribemodal from "@/components/tribemodal";
import TribeList from "@/components/tribelisttable";
import Image from "next/image";
import Officemodal from "@/components/officemodal";
import EditOfficemodal from "@/components/editofficemodal";
import DeleteOfficemodal from "@/components/deleteofficemodal";
import withAuth from "@/pages/routing-protection";

const officeCards = [
  {
    office: "Abuja",
    description:
      "3rd Floor, Yobe Investment House, Plot 1332 Ralph Shodeinde St., beside Federal Ministry of Finance, Central Business District, Abuja, FCT",
    image1: "/icons/nigeria-office.svg",
    image2: "/icons/edit-icon.svg",
    image3: "/icons/delete-icon.svg",
  },
  {
    office: "Lagos",
    description:
      "5, Adekunle Lawal Road, Off 2nd Avenue,. Ikoyi  106104- Lagos, Lagos State, Nigeria.",
    image1: "/icons/nigeria-office.svg",
    image2: "/icons/edit-icon.svg",
    image3: "/icons/delete-icon.svg",
  },
  {
    office: "Ibadan",
    description:
      "8VMX+R6G, Beside First Bank Plc, Christiana Oyinlade House, Ibadan, Oyo State",
    image1: "/icons/nigeria-office.svg",
    image2: "/icons/edit-icon.svg",
    image3: "/icons/delete-icon.svg",
  },
  {
    office: "Fittings",
    description:
      "3rd Floor, Yobe Investment House, Plot 1332 Ralph Shodeinde St., beside Federal Ministry of Finance, Central Business District, Abuja, FCT",
    image1: "/icons/uganda-office.svg",
    image2: "/icons/edit-icon.svg",
    image3: "/icons/delete-icon.svg",
  },
  {
    office: "Kisimu",
    description: "5 Adekunle Lawal Rd, Ikoyi 106104, Lagos",
    image1: "/icons/kenya-office.svg",
    image2: "/icons/edit-icon.svg",
    image3: "/icons/delete-icon.svg",
  },
  {
    office: "Houston",
    description: "5 Adekunle Lawal Rd, Ikoyi 106104, Lagos",
    image1: "/icons/usa-office.svg",
    image2: "/icons/edit-icon.svg",
    image3: "/icons/delete-icon.svg",
  },
];

interface IAddressList {
  is_headquarter: boolean;
  description: string;
  edit_url: string;
  detail_url: string;
  delete_url: string;
  city: string;
}
const Office = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [successOpened, { open: openSuccess, close: closeSuccess }] =
    useDisclosure(false);
  const [view, setView] = useState<IAddressList[]>(null);

  const viewdata = async () => {
    const token = JSON.parse(localStorage.getItem("userlogin") as string)
      ?.tokens?.access;
    const res = await fetch(
      "https://expertportal-production.up.railway.app/api/address/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    // console.log(data);
    setView(data.results);
  };

  useEffect(() => {
    viewdata();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <Search />
        <button
          onClick={open}
          className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px] mt-[20px] px-[24px] font-medium
             transition-transform duration-300 transform-gpu hover:scale-105 flex gap-1 justify-center items-center"
        >
          <Image
            height={20}
            width={20}
            src={"/icons/plus-icon.svg"}
            alt="iconplus"
          />
          <span>Add address</span>
        </button>
        <Officemodal opened={successOpened} close={closeSuccess} />
        {/* <DeactivateCard opened={opened} close={close} /> */}
      </div>
      <div className="border-t border-b border-[#D9DFE4] mt-6 pt-4 pb-1">
        <div className="flex items-center gap-1 hover:border-b-[2px] hover:border-[#D9DFE4] w-[80px]">
          <p className="text-xsfont-medium text-[#4A4C58]">Address </p>
          <span className="h-[16px] rounded-full w-[16px] pl-1 flex items-center bg-[#F7F9FC] font-semibold text-xs text-[#8F9198]">
            {view?.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-3 gap-8">
        {view?.map((item, i) => (
          <div key={i}>
            <div className=" border border-[#C9DEF8] rounded-lg h-[183px] flex flex-col">
              <div className="w-full h-1 rounded-t-[4px] bg-[#3851DD] px-6"></div>
              <div className=" p-2 h-full">
                <div className="flex h-full flex-col ">
                  <div className="flex items-center justify-between border-b border-[#8F9198] pb-2">
                    <h3 className="font-bold text-base text-[#4A4C58]">
                      {item?.city}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="h-[27px] w-[60px] bg-[#E8F1FC] text-[#1C75E1] text-sm font-medium p-1 rounded-[4px]">
                        <span>Nigeria</span>
                      </div>

                      {item.is_headquarter ? (
                        <Image
                          height={27}
                          width={38}
                          src={"/icons/hq.svg"}
                          alt=""
                        />
                      ) : null}
                      {/* <Image height={27} width={38} src={"/icons/hq.svg"} alt="" /> */}
                    </div>
                  </div>
                  <div className="flex flex-col h-full justify-between pt-4">
                    <p className="font-normal max-w-[320px] text-xs text-[#8F9198]">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-end gap-2">
                      <div>
                        <EditOfficemodal opened={opened} close={close} />
                        <Image
                          height={24}
                          width={24}
                          src="/icons/edit-icon.svg"
                          alt="edit-icons"
                          onClick={open}
                        />
                      </div>
                      <div>
                        <Image
                          height={24}
                          width={24}
                          src="/icons/delete-icon.svg"
                          alt="delete"
                          onClick={open}
                        />
                        {/* <DeleteOfficemodal opened={opened} close={close} /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* create office cards */}
    </div>
  );
};
export default Office;
