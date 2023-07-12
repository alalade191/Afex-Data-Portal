import React from "react";
import Image from "next/image";

const DashboadTableList: React.FC = () => {
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
      <div>
        {/*Table Header */}
        <div className="px-[20px] py-[8px] text-base text-[#4A4C58] bg-[#DADADD] flex items-center justify-between rounded-lg">
          <h3>Name</h3>
          <h3>Email Address</h3>
          <h3>Mobile Number</h3>
          <h3>Tribe/Department</h3>
          <h3>Squard/Unit</h3>
        </div>
        {/* Table Data */}
        {tablelist.map((list) => {
          return (
            <div
              key={list.name}
              className="px-[20px] py-[20px] flex items-center justify-between border-b text-[#4A4C58] leading-5 font-normal text-sm border-[#F0F0F1]"
            >
              <h3>{list.name}</h3>
              <h3>{list.email}</h3>
              <h3>{list.mobile}</h3>
              <h3>{list.tribe}</h3>
              <h3>{list.squad}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DashboadTableList;
