import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="w-full pt-[50px]">
      <div className="w-[90%] mx-auto flex flex-row justify-between items-center">
        <figure className="h-[50px] w-[150px]">
          <Image
            height={20}
            width={80}
            src={"/images/logo.svg"}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </figure>
        <figure className="h-[50px] w-[30px]">
          <Image
            height={20}
            width={80}
            src={"/images/light-mode.svg"}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </figure>
      </div>
    </header>
  );
};

export default Header;
