import React from "react";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import Image from "next/image";
import Link from "next/link";
import { PinInput, Group } from "@mantine/core";
import Pin from "@/components/pininput";

const Otp: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-[30px] gap-[20px]">
      <h3 className="text-[#BF2018] pb-[15px] font-semibold text-2xl text-center w-[386px]">
        AFEX SSO
      </h3>

      <div className="flex flex-col gap-[20px]">
        <h3 className="font-semibold text-2xl font-switzer text-[#5E606A] text-center leading-[33px]">
          Forgot password?
        </h3>
        <p className="font-normal text-base text-center text-[#8F9198] font-switzer w-[386px] max-w-[350px]">
          Kindly enter the 6-digit pin sent to your email address provider
        </p>
      </div>
      <Pin />
      {/* <div className="flex gap-3">
        <input
          type="text"
          name="number"
          placeholder="0"
          className="outline-none border border-[#F0F0F1] w-[25px] h-[30px] rounded-sm"
        />
        <input
          type="text"
          name="number"
          placeholder="0"
          className="outline-none border border-[#F0F0F1] w-[25px] h-[30px] rounded-sm"
        />
        <input
          type="text"
          name="number"
          placeholder="0"
          className="outline-none border border-[#F0F0F1] w-[25px] h-[30px] rounded-sm"
        />
        <input
          type="text"
          name="number"
          placeholder="0"
          className="outline-none border border-[#F0F0F1] w-[25px] h-[30px] rounded-sm"
        />
        <input
          type="text"
          name="number"
          placeholder="0"
          className="outline-none border border-[#F0F0F1] w-[25px] h-[30px] rounded-sm"
        />
        <input
          type="text"
          name="number"
          placeholder="0"
          className="outline-none border border-[#F0F0F1] w-[25px] h-[30px] rounded-sm"
        />
      </div> */}

      <Button text="Submit" />
      <p className="font-normal text-base text-end text-[#8F9198] font-switzer w-[386px]">
        Cant find 6-digit pin?{" "}
        <Link href="" className="text-[#BF2018] font-semi-bold">
          Resend pin
        </Link>
        {/*on click of resend pin will reload this component */}
      </p>
      <div className="flex items-center gap-3 pt-[12px]">
        <figure>
          <Image
            height={20}
            width={20}
            src={"/images/breadcrumb.svg"}
            alt="breadcrumb"
          />
        </figure>
        <span className="font-semibold font-switzer text-[#5E606A] ">
          <Link href="/">Back to Sign in</Link>
        </span>
      </div>
    </div>
  );
};
export default Otp;
