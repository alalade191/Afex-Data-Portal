import React from "react";
import ActiveTribe from "./activetribestyle";
import { Table } from "@mantine/core";
import ActiveTribeTable from "./activetribestyle";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";

const TribeList = ({ tribe }) => {
  dayjs.extend(LocalizedFormat);

  const rows = tribe?.map((item, i) => (
    <tr key={i}>
      <td>{item.name}</td>
      <td>
        {item.squads.join(", ") || "--"}
        {item.squads.length > 3 ? `+${item.squads.length - 3}` : ""}
      </td>
      <td>{item.tribe_lead}</td>
      <td>{dayjs(item.date_created).format("ddd, MMM D, YYYY")}</td>
      <td>
        <ActiveTribeTable />
      </td>
    </tr>
  ));

  return (
    <div className="overflow-auto flex-1">
      <Table className="mt-3">
        <thead className="bg-[#F5F5F6] font-medium text-base py-[15px] text-[#4A4C58]">
          <tr className="">
            <th>Tribe</th>
            <th>Squads</th>
            <th>Tribe Lead</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};
export default TribeList;
