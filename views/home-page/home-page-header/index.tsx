import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
const Header = () => {
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  // {
  //   if (!mounted) {
  //     return null;
  //   }
  // }

  return (
    <header className="w-full pt-[50px]">
      <div className="w-[90%] mx-auto flex flex-row justify-between items-center">
        {/* {theme === "light" ? (
          <figure className="h-[50px] w-[150px]">
            <Image
              height={20}
              width={80}
              src={"/images/logo.svg"}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </figure>
        ) : (
          theme === "dark" && (
            <figure className="h-[50px] w-[150px]">
              <Image
                height={20}
                width={80}
                src={"/icons/logo-dark.svg"}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </figure>
          )
        )} */}

        <figure className="h-[50px] w-[150px]">
          <Image
            height={20}
            width={80}
            src={"/images/logo.svg"}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </figure>

        <figure
          className="h-[50px] w-[30px]"
          // onClick={() => {
          //   theme === "dark"
          //     ? setTheme("light")
          //     : theme === "light" && setTheme("dark");
          // }}
        >
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
