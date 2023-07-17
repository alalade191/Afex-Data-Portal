import React, { useState, FormEvent } from "react";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PasswordInput } from "@mantine/core";

const ResetPassword: React.FC = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const router = useRouter();
  const resetpassword = async () => {
    try {
      const res = await fetch(
        "https://expertportal-production.up.railway.app/api/auth/reset-password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "alalade191@gmail.com",
            new_password: first,
            confirm_password: second,
          }),
        }
      );
      if (res.ok) router.push("/login");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    resetpassword();
  };

  return (
    <form
      onSubmit={handlesubmit}
      className="flex flex-col items-center gap-[20px] py-[20px]"
    >
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

      <PasswordInput
        placeholder="Enter your new password"
        label="New Password"
        description=""
        withAsterisk
        value={first}
        onChange={(event) => setFirst(event.currentTarget.value)}
        required
        classNames={{
          root: "!focus:outline !focus:outline-0",
          label: "text-[16px] text-[#4A4C58]",
          input:
            "!h-[54px] !w-[386px] !mt-[20px]  !rounded-[8px] !outline-none !border-[#F0F0F1] !border !font-switzer !pl-[15px] !outline !outline-0 !focus:outline-0",
          innerInput:
            "!self-center !focus:outline-0 !h-full outline active:outline-0",
        }}
      />

      <PasswordInput
        placeholder="Re enter your new password"
        label="Confirm Password"
        description=""
        withAsterisk
        value={second}
        onChange={(event) => setSecond(event.currentTarget.value)}
        required
        classNames={{
          root: "!focus:outline !focus:outline-0",
          label: "text-[16px] text-[#4A4C58]",
          input:
            "!h-[54px] !w-[386px] !mt-[20px]  !rounded-[8px] !outline-none !border-[#F0F0F1] !border !font-switzer !pl-[15px] !outline !outline-0 !focus:outline-0",
          innerInput:
            "!self-center !focus:outline-0 !h-full outline active:outline-0",
        }}
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
    </form>
  );
};
export default ResetPassword;
