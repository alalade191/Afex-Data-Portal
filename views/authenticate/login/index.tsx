import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import { FormEvent } from "react";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const[]= useState('')
  const login = async () => {
    try {
      const resp = await fetch(
        "https://expertportal-production.up.railway.app/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = resp.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login();
    console.log(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center py-[30px] gap-[20px]"
    >
      <h3 className=" text-[#4A4C58] ont-switzer font-semibold text-2xl w-[386px]">
        Sign in with SSO
      </h3>

      <InputField
        onChange={(emailvalue) => setEmail(emailvalue)}
        htmlFor="email"
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter email address"
      />

      <InputField
        onChange={(passwordvalue) => setPassword(passwordvalue)}
        htmlFor="password"
        label="Password"
        name="password"
        type="pasword"
        placeholder="*************"
      />
      <Link
        href=""
        className="text-base font-semibold font-switzer text-[#BF2018] w-[386px] ont-switzer text-end"
      >
        Forgot Password?
      </Link>
      <Button text="Sign in" />
    </form>
  );
};
export default Login;
