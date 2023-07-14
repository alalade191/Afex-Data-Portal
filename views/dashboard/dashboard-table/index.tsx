import React, { useEffect, useState } from "react";
import Image from "next/image";

const DashboadTableList = ({ tableData }) => {
  interface Table {
    name: string;
    email: string;
    mobile: number;
    tribe: string;
    squad: string;
  }

  const tablelist: Table[] = [
    {
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
    },
    {
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
    },
    {
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
    },
    {
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
    },
    {
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
    },
    {
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
    },
    {
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
    },
    {
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
    },
    {
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
    },
  ];

  return (
    <div>
      {/* staff list data */}
      <table className="w-full">
        <thead>
          {/*Table Header */}
          <tr className="px-[20px] py-[8px] text-base text-[#4A4C58] bg-[#DADADD] rounded-lg">
            <th className="text-left py-3">Name</th>
            <th className="text-left py-3">Email Address</th>
            <th className="text-left py-3">Mobile Number</th>
            <th className="text-left py-3">Tribe/Department</th>
            <th className="text-left py-3">Squad/Unit</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          {tableData?.map((list, i) => {
            return (
              <tr
                key={i}
                className="border-b text-[#4A4C58] leading-5 font-normal text-sm border-[#F0F0F1]"
              >
                <td className="py-3">{list.name}</td>
                <td className="py-3">{list.email}</td>
                <td className="py-3">{list.phone_number}</td>
                <td className="py-3">{list.tribe}</td>
                <td className="py-3">{list.squad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default DashboadTableList;
