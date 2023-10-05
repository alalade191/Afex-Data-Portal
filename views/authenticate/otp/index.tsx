import React, { useState, FormEvent } from "react";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import Image from "next/image";
import Link from "next/link";
import { PinInput, Group } from "@mantine/core";
import OtpPin from "@/components/pin";
import OtpInput from "react-otp-input";
import { useRouter } from "next/navigation";

const Otp: React.FC = () => {
  const [otp, setOtp] = useState("");

  const router = useRouter();
  const verifypin = async () => {
    try {
      const res = await fetch(
        "https://web-production-029d.up.railway.app/api/auth/verify-pin/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "alalade191@gmail.com",
            verification_code: otp,
          }),
        }
      );
      if (res.ok) router.push("/resetpassword");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    verifypin();
  };

  return (
    <form
      onSubmit={handlesubmit}
      className="flex flex-col items-center py-[30px] gap-[20px]"
    >
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

      <div>
        <OtpInput
          value={String(otp)}
          onChange={setOtp}
          numInputs={6}
          inputType="tel"
          inputStyle="w-24 h-10 caret-black text-center outline-none transition-all4 border-b-2 border-b-slate-700 focus:border-b-primary text-lg"
          containerStyle="flex items-center justify-center gap-x-2 mt-7"
          renderInput={(props) => (
            <input {...props} style={{ width: "3.3rem" }} />
          )}
        />
      </div>

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
    </form>
  );
};
export default Otp;
