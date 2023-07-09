import React from "react";
import ActiveTable from "./activetablestyle";
import { Table } from "@mantine/core";

const StaffList = () => {
  const tablelists = [
    {
      check: <input type="checkbox" name="" id="" />,
      serial: 1,
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
      state: <ActiveTable />,
    },
    {
      check: <input type="checkbox" name="" id="" />,
      serial: 2,
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
      state: <ActiveTable />,
    },
    {
      check: <input type="checkbox" name="" id="" />,
      serial: 3,
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
      state: <ActiveTable />,
    },
    {
      check: <input type="checkbox" name="" id="" />,
      serial: 4,
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
      state: <ActiveTable />,
    },
    {
      check: <input type="checkbox" name="" id="" />,
      serial: 5,
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
      state: <ActiveTable />,
    },
    {
      check: <input type="checkbox" name="" id="" />,
      serial: 6,
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
      state: <ActiveTable />,
    },
    {
      check: <input type="checkbox" name="" id="" />,
      serial: 7,
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
      state: <ActiveTable />,
    },
    {
      check: <input type="checkbox" name="" id="" />,
      serial: 8,
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
      state: <ActiveTable />,
    },
    {
      check: (
        <input
          type="checkbox"
          name=""
          id=""
          style={{
            background: "green",
          }}
        />
      ),
      serial: 9,
      name: "Ayodele Davies",
      email: "adavies@afexnigeria.com",
      mobile: 8106545067,
      tribe: "Innovation and Technology",
      squad: "Product Design",
      state: <ActiveTable />,
    },
  ];

  const rows = tablelists.map((item) => (
    <tr key={item.email}>
      <td className="text-xs font-normal text-red-300">{item.check}</td>
      <td>{item.serial}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.mobile}</td>
      <td>{item.tribe}</td>
      <td>{item.squad}</td>
      <td>{item.state}</td>
    </tr>
  ));

  return (
    <Table>
      <thead className="bg-[#F5F5F6] font-medium text-[16px] py-[20px] text-[#4A4C58]">
        <tr className="border border-green-500 rounded-t">
          <th>
            {" "}
            <input type="checkbox" name="" id="" />{" "}
          </th>
          <th>S/N</th>
          <th>Name</th>
          <th>Email Address</th>
          <th>Mobile Number</th>
          <th>Tribe / Department</th>
          <th>Squad / Unit</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
export default StaffList;
