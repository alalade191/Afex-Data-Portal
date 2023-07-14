import React from "react";
import Image from "next/image";
import withAuth from "@/pages/routing-protection";

const AdminProfile = () => {
  interface Data {
    image: string;
    header: string;
    paragraph: string | number;
    imagecopy?: string;
  }
  const userdata: Data[] = [
    {
      image: "/icons/department.svg",
      header: "DEPARTMENT",
      paragraph: "Corporate Servoce",
    },
    {
      image: "/icons/email.svg",
      header: "EMAIL ADDRESS",
      paragraph: "geromonsele@afexnigeria.com",
      imagecopy: "/icons/copy.svg",
    },
    {
      image: "/icons/phone.svg",
      header: "MOBILE NUMBER",
      paragraph: +2348106545067,
    },
    {
      image: "/icons/phone.svg",
      header: "WORKMOBILE",
      paragraph: +2348106545067,
    },
    {
      image: "icons/calendar.svg",
      header: "DATE OF BIRTH",
      paragraph: "14 january, xxxx",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-[500px_3px_1fr]">
        <div className="pr-[12px]">
          <div className="h-[15rem] border-b border-[#DADADD]">
            <div className="flex justify-between">
              <figure className="w-[100px] h-[100px]">
                <Image
                  height={50}
                  width={50}
                  src={"/icons/gloria.svg"}
                  alt="user-image"
                  className="w-full h-full"
                />
              </figure>
              <figure>
                <Image
                  height={50}
                  width={50}
                  src={"/icons/edit.svg"}
                  alt="edit"
                />
              </figure>
            </div>
            <h3 className="font-medium py-[8px] text-3xl text-[#1c1e25]">
              Gloria Eromonsele
            </h3>
            <p className="font-medium pb-[8px] text-base text-[#8F9198]">
              Analyst Talent Manager
            </p>
            <div className="flex gap-3 items-center">
              <div className="flex items-center py-[8px] px-[5px] gap-2 bg-[#EBEEFC] rounded-md w-[165px] ">
                <div className="flex items-center gap-1">
                  <figure className="h-[20px] w-[20px]">
                    <Image
                      height={20}
                      width={20}
                      src={"/icons/id.svg"}
                      alt="id"
                      className="w-full h-full"
                    />
                  </figure>
                  <p className="font-medium text-sm text-[#352929]">YOUR ID</p>
                </div>
                <p className="font-medium text-sm text-[#3851DD]">A2023272</p>
              </div>

              <div className="flex items-center bg-[#E7F9F0] py-[8px] px-[5px] gap-2 rounded-md">
                <div className="h-[7px] w-[7px] bg-[#0DBF66] rounded-full"></div>
                <p className=" font-normal text-sm text-[#076D3A]">Active</p>
              </div>
            </div>
          </div>

          {/* user data */}
          {userdata.map((list, i) => {
            return (
              <div key={list.header}>
                <div className="flex items-center py-3 gap-3">
                  <figure className="w-[50px] h-[50px]">
                    <Image
                      height={50}
                      width={50}
                      src={list.image}
                      alt="department"
                      className="w-full h-full"
                    />
                  </figure>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-normal text-sm text-[#5E606A]">
                      {list.header}
                    </h4>
                    <div className="flex items-center gap-1">
                      <h3 className="font-normal text-base text-[#2C2F3C]">
                        {list.paragraph}
                      </h3>
                      {i === 1 ? (
                        <span>
                          <Image
                            height={20}
                            width={20}
                            src={list.imagecopy as string}
                            alt="copy"
                          />
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* divider */}
        <div className="w-[1px] h-[600px] bg-[#DADADD]"></div>
        <div className="pl-[12px]">
          <div className="h-[15rem] w-[700px] border-b border-[#DADADD]">
            <h2 className="pt-[10px] pb-[25px] text-[#4A4C58] font-medium text-xl">
              Personal Information
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">
                  First Name
                </h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  Gloria
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">
                  Last Name
                </h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  Eronmonsele
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">
                  Middle Name
                </h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  Onosetale
                </h3>
              </div>
            </div>

            <div className="flex justify-between w-[380px] max-w-[380px] pt-[55px]">
              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">Gender</h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  Female
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">
                  Marital status
                </h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  Single
                </h3>
              </div>
            </div>
          </div>

          {/* Organization */}
          <div className="w-[700px] border-b border-[#DADADD] pt-[12px] pb-[15px]">
            <h2 className="pt-[10px] pb-[25px] text-[#4A4C58] font-medium text-xl">
              Organization
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">
                  Tribe / Department
                </h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  Corporate Services
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">
                  Squad / Unit
                </h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  Talent Management
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">
                  Designation
                </h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  Talent Manager
                </h3>
              </div>
            </div>
          </div>

          {/* Next of kin */}
          <div className="w-[700px] border-b border-[#DADADD] pt-[12px] pb-[15px]">
            <h2 className="pt-[10px] pb-[25px] text-[#4A4C58] font-medium text-xl">
              Next of Kin
            </h2>
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">Name</h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  Sylvester Eromonsele
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">
                  Phone Number
                </h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  +234 810 6545 067
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className=" font-normal text-sm text-[#5E606A]">
                  Email Address
                </h2>
                <h3 className="font-semibold text-base text-[#5E606A]">
                  seromonsele@gmail.com
                </h3>
              </div>
            </div>

            <div className="flex flex-col pt-[12px]">
              <h2 className=" font-normal text-sm text-[#5E606A]">
                Relationship
              </h2>
              <h3 className="font-semibold text-base text-[#5E606A]">Father</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withAuth(AdminProfile);
