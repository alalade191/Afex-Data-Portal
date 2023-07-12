import HomepageBody from "@/views/home-page/home-page-body";
import Header from "@/views/home-page/home-page-header";
import React from "react";

export default function landingpage() {
  return (
    <div className="bg-[url('/images/homepage-background.png')] bg-no-repeat bg-cover h-screen w-screen object-cover flex flex-col">
      <Header />
      <HomepageBody />
    </div>
  );
}
