import React from "react";
import ActiveTribe from "./activetribestyle";
import { Table } from "@mantine/core";
import ActiveTribeTable from "./activetribestyle";

const TribeList = () => {
  const tablelists = [
    {
      tribe: "Innovation and Technology",
      squad: "Software Development, Design and Apps +5",
      lead: "Yusuf Oguntola",
      date: "Mon, 03 Apr 2023",
      action: <ActiveTribeTable />,
    },
    {
      tribe: "Innovation and Technology",
      squad: "Software Development, Design and Apps +5",
      lead: "Yusuf Oguntola",
      date: "Mon, 03 Apr 2023",
      action: <ActiveTribeTable />,
    },
    {
      tribe: "Innovation and Technology",
      squad: "Software Development, Design and Apps +5",
      lead: "Yusuf Oguntola",
      date: "Mon, 03 Apr 2023",
      action: <ActiveTribeTable />,
    },
    {
      tribe: "Innovation and Technology",
      squad: "Software Development, Design and Apps +5",
      lead: "Yusuf Oguntola",
      date: "Mon, 03 Apr 2023",
      action: <ActiveTribeTable />,
    },
    {
      tribe: "Innovation and Technology",
      squad: "Software Development, Design and Apps +5",
      lead: "Yusuf Oguntola",
      date: "Mon, 03 Apr 2023",
      action: <ActiveTribeTable />,
    },
    {
      tribe: "Innovation and Technology",
      squad: "Software Development, Design and Apps +5",
      lead: "Yusuf Oguntola",
      date: "Mon, 03 Apr 2023",
      action: <ActiveTribeTable />,
    },
    {
      tribe: "Innovation and Technology",
      squad: "Software Development, Design and Apps +5",
      lead: "Yusuf Oguntola",
      date: "Mon, 03 Apr 2023",
      action: <ActiveTribeTable />,
    },
    {
      tribe: "Innovation and Technology",
      squad: "Software Development, Design and Apps +5",
      lead: "Yusuf Oguntola",
      date: "Mon, 03 Apr 2023",
      action: <ActiveTribeTable />,
    },
    {
      tribe: "Innovation and Technology",
      squad: "Software Development, Design and Apps +5",
      lead: "Yusuf Oguntola",
      date: "Mon, 03 Apr 2023",
      action: <ActiveTribeTable />,
    },
    {
      tribe: "Innovation and Technology",
      squad: "Software Development, Design and Apps +5",
      lead: "Yusuf Oguntola",
      date: "Mon, 03 Apr 2023",
      action: <ActiveTribeTable />,
    },
  ];

  const rows = tablelists.map((item) => (
    <tr key={item.date}>
      <td>{item.tribe}</td>
      <td>{item.squad}</td>
      <td>{item.lead}</td>
      <td>{item.date}</td>
      <td>{item.action}</td>
    </tr>
  ));

  return (
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
  );
};
export default TribeList;
