import React from "react";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import Image from "next/image";
import Link from "next/link";

const ForgetPassword: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-[30px] gap-[20px]">
      <h3 className="pb-[15px] text-[#BF2018] font-semibold text-2xl text-center w-[386px]">
        AFEX SSO
      </h3>

      <div className="flex flex-col gap-[20px]">
        <h3 className="font-semibold text-2xl font-switzer text-[#5E606A] text-center">
          Forgot password?
        </h3>
        <p className="font-normal text-base text-center text-[#8F9198] font-switzer w-[386px]">
          Enter your email address below, and we will email you a 6-digit pin to
          reset your password
        </p>
      </div>

      <InputField
        htmlFor="email"
        label=""
        onChange={""}
        name="email"
        type="email"
        placeholder="Enter email address"
      />

      <Link href={"/otpcode"}>
        <Button text="Submit" />
      </Link>
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
export default ForgetPassword;
