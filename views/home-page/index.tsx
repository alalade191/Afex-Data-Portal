import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/views/home-page/home-page-header";
import HomepageBody from "@/views/home-page/home-page-body";
import { clsx } from "@mantine/core";
import { useTheme } from "next-themes";

const Homepage: React.FC = () => {
  return (
    <div className="bg-[url('/images/homepage-background.png')] bg-no-repeat bg-cover h-screen w-screen object-cover flex flex-col">
      <Header />
      <HomepageBody />
    </div>
  );
};
export default Homepage;
