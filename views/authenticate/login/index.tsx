import React, { useState, useContext } from "react";
import Link from "next/link";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { AuthContext, IContextType } from "@/pages/_app";
import { PasswordInput } from "@mantine/core";
import AuthLayout from "@/layout/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const { setAuthUser } = useContext(AuthContext) as IContextType;

  const router = useRouter();
  const login = async () => {
    try {
      const resp = await fetch(
        "https://web-production-029d.up.railway.app/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await resp.json();

      setAuthUser(data);
      console.log(data);
      localStorage.setItem("userlogin", JSON.stringify(data));
      data.tokens.access && router.push("/dashboard");
    } catch (error) {
      toast.error("Incorrect credentials");
      console.log(error);
    }
  };

  // Handlesubmiit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login();
    console.log(email, password);
  };

  return (
    <AuthLayout>
      <ToastContainer toastClassName="customToast" />
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

        <PasswordInput
          placeholder="••••••••"
          label="Password"
          description=""
          withAsterisk
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
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

        <Link
          href="/forgotpassword"
          className="text-base font-semibold font-switzer text-[#BF2018] w-[386px] ont-switzer text-end"
        >
          Forgot Password?
        </Link>
        <Button text="Sign in" />
      </form>
    </AuthLayout>
  );
};
export default Login;
