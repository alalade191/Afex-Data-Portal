import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IDasboard } from "../dashboard-overview";
import { useTheme } from "next-themes";

interface DashboardCard1 {
  header: string;
  number: number;
  firstimage: string;
  secondimage: string;
  firsttext: string;
  secondtext: string;
  firstnumber: number;
  secondnumber: number;
}

interface Dashboardcard2 {
  created: string;
  days: string;
  header: string;
  number: number;
  firstimage: string;
}

const Cards = ({ dashboardData }: { dashboardData: IDasboard }) => {
  const card: DashboardCard1[] = [
    {
      header: "Overall number of Staff",
      number: dashboardData?.overall_staff,
      firstimage: "/icons/first.svg",
      secondimage: "/icons/chart.svg",
      firsttext: "Male Staff",
      secondtext: "Female Staff",
      firstnumber: dashboardData?.male_staff,
      secondnumber: dashboardData?.female_staff,
    },
  ];

  const othercard: Dashboardcard2[] = [
    {
      header: "Overall number of Tribes",
      number: dashboardData?.overall_tribe,
      firstimage: "/icons/second.svg",
      created: "Last created:",
      days: dashboardData?.last_created_tribe,
    },
    {
      header: "Overall number of Squads",
      number: dashboardData?.overall_squad,
      firstimage: "/icons/third.svg",
      created: "Last created:",
      days: dashboardData?.last_created_squad,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 dark:bg-[#232A37]">
      {card.map((item) => {
        return (
          <div
            style={{
              boxShadow:
                "0px 0px 1px 0px rgba(193, 194, 198, 0.40), 0px 6px 6px -6px rgba(193, 194, 198, 0.16)",
            }}
            className="bg-[#fff] dark:bg-[#232A37] p-4 rounded-lg border-[3px] border-white"
            key={item.header}
          >
            {/* firts card */}
            <div className=" flex flex-col">
              <p className="font-medium text-sm text-[#8E9391] dark:text-[#C0C3C2] pb-3">
                {item.header}
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex  justify-between items-center">
                  <p className="font-bold text-4xl text-[#2A332F] dark:text-[#FFFFFF]">
                    {item.number}
                  </p>
                  <figure className="w-[40px] h-[40px]">
                    <Image
                      height={40}
                      width={40}
                      src={item.firstimage}
                      alt="first"
                      className="w-full h-full"
                    />
                  </figure>
                </div>
                {/* second div */}
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center">
                      <figure className="w-[62px] h-[62px]">
                        <Image
                          height={100}
                          width={100}
                          src={item.secondimage}
                          alt="chart"
                          className="w-full h-full"
                        />
                      </figure>
                      <div>
                        <div className="flex gap-1 items-center">
                          <div className="h-[4px] w-[8px] rounded-sm bg-[#3851DD] mx-[5px]"></div>
                          <p className="font-medium text-sm text-[#8F9198] dark:text-[#C1C2C6]">
                            {item.firsttext}
                          </p>
                        </div>

                        <div className="flex gap-1 items-center">
                          <div className="h-[4px] w-[8px] rounded-sm bg-[#8F9198] mx-[5px]"></div>
                          <p className="font-medium text-sm text-[#8F9198] dark:text-[#C1C2C6]">
                            {item.secondtext}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-[17px] dark:text-[#C1C2C6] text-[#2C2F3C]">
                        {item.firstnumber}
                      </p>
                      <p className="font-semibold text-[17px] text-[#2C2F3C] dark:text-[#C1C2C6]">
                        {item.secondnumber}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* other cards */}

      {othercard.map((item) => {
        return (
          <div
            style={{
              boxShadow:
                "0px 0px 1px 0px rgba(193, 194, 198, 0.40), 0px 6px 6px -6px rgba(193, 194, 198, 0.16)",
            }}
            className="bg-[#fff] dark:bg-[#232A37] p-4 rounded-lg border-[3px] border-white"
            key={item.header}
          >
            {/* firts card */}
            <div className=" flex flex-col h-full">
              <p className="font-medium text-sm text-[#8E9391] dark:text-[#C0C3C2] pb-3">
                {item.header}
              </p>
              <div className="flex flex-col flex-1 gap-6 justify-between">
                <div className="flex  justify-between items-center">
                  <p className="font-bold text-4xl text-[#2A332F] dark:text-[#FFFFFF]">
                    {item.number}
                  </p>
                  <figure className="w-[40px] h-[40px]">
                    <Image
                      height={40}
                      width={40}
                      src={item.firstimage}
                      alt="first"
                      className="w-full h-full"
                    />
                  </figure>
                </div>
                {/* second div */}
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm text-[#8F9198] dark:text-[#C0C3C2]">
                    {item.created}
                  </p>
                  <p className="font-semibold text-[17px] text-[#2C2F3C] dark:text-[#A9B4F0]">
                    {item.days}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
