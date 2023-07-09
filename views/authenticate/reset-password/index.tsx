import React from "react";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import Image from "next/image";
import Link from "next/link";

const ResetPassword: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] py-[20px]">
      <h3 className="text-[#BF2018] font-semibold text-2xl text-center">
        AFEX SSO
      </h3>

      <div className="flex flex-col gap-[20px]">
        <h3 className="font-semibold text-2xl font-switzer text-[#5E606A] text-center">
          Reset password?
        </h3>
        <p className="font-normal text-base text-center text-[#8F9198] font-switzer w-[386px]">
          Kindly provide a new password for your account.
        </p>
      </div>

      <InputField
        htmlFor="password"
        label="New Password"
        name="password"
        type="password"
        placeholder="Enter your new password"
      />
      <InputField
        htmlFor="password"
        label="Confirm Password"
        name="password"
        type="password"
        placeholder="Re enter your new password"
      />

      <Button text="Submit" />
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
export default ResetPassword;
