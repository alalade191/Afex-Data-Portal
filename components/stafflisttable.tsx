import React from "react";
import ActiveTable from "./activestafflisttablestyle";
import { Table } from "@mantine/core";
import { IStaffList } from "@/views/dashboard/staff-management";

const StaffList = ({ tableData }: { tableData: IStaffList[] }) => {

  const rows = tableData?.map((item, i) => (
    <tr key={item.id}>
      <td>{i + 1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone_number}</td>
      <td>{item.tribe}</td>
      <td>{item.squad}</td>
      <td>{item.status ? <ActiveTable /> : null}</td>
    </tr>
  ));

  return (
    <Table className="mt-3">
      <thead className="bg-[#F5F5F6] font-medium text-base py-[15px] text-[#4A4C58]">
        <tr className="">
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
