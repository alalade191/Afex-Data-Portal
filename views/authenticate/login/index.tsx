import React, { useState, useContext } from "react";
import Link from "next/link";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { AuthContext, IContextType } from "@/pages/_app";
import { Loader } from "@mantine/core";
import PersonalStepper from "@/modals/personal-stepper";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const { setAuthUser } = useContext(AuthContext) as IContextType;
  //  const[]= useState('')
  const router = useRouter();
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
    <>
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

        <InputField
          onChange={(passwordvalue) => setPassword(passwordvalue)}
          htmlFor="password"
          label="Password"
          name="password"
          type="password"
          placeholder="*************"
        />
        <Link
          href="/forgotpassword"
          className="text-base font-semibold font-switzer text-[#BF2018] w-[386px] ont-switzer text-end"
        >
          Forgot Password?
        </Link>
        <Button text="Sign in" />
      </form>
    </>
  );
};
export default Login;
