import Image from "next/image";
import React from "react";
import Otp from "@/views/authenticate/otp/index";
import Login from "./login";
import ForgetPassword from "./forget-password";
import ResetPassword from "./reset-password";
const Authentication: React.FC = () => {
  return (
    <div className="w-full bg-[url('/images/background.png')] bg-no-repeat bg-cover h-full object-cover">
      <div className="w-[90%] mx-auto">
        <header className="pt-[50px]">
          <figure className="w-[100px] h-[29px]">
            <Image
              height={50}
              width={50}
              src={"/images/login-logo.svg"}
              alt="login-logo"
              className="w-full h-full"
            />
          </figure>
        </header>

        {/* main content of body */}
        <section className="flex justify-between items-center">
          <article className="w-[531px]">
            <figure className="w-[309px] h-[300px] mx-auto">
              <Image
                height={300}
                width={300}
                src={"/images/login-image.png"}
                alt="login"
                className="w-full h-full"
                objectFit="contain"
              />
            </figure>
            <div className="pt-[30px]">
              <h2 className="font-semibold text-2xl ont-switzer text-center text-[#5E606A] leading-[33px]">
                Streamline your Login Experience with SSO{" "}
              </h2>
              <p className="font-normal text-base text-center text-[#8F9198] ont-switzer leading-[22px]">
                Welcome to our Single Sign-On login page! With just one set of
                login credentials, you can now access all your favorite
                applications and services without the need to enter multiple
                usernames and passwords
              </p>
            </div>
          </article>
          {/* sign in with sso container */}

          <div
            style={{ boxShadow: "0px 4px 44px 0px rgba(0, 0, 0, 0.16)" }}
            className="w-[466px] mx-auto bg-white rounded-[16px] my-[50px]"
          >
            <Login />
            {/* <ForgetPassword /> */}
            {/* <Otp /> */}
            {/* <ResetPassword /> */}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Authentication;
