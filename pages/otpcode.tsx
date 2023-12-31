import Login from "@/views/authenticate/login";
import Otp from "@/views/authenticate/otp";
import Image from "next/image";
import React from "react";

export default function OtpPage() {
  return (
    <>
      <div className="w-screen bg-[url('/images/background.png')] bg-no-repeat bg-cover h-screen object-cover flex flex-col">
        <header className="pt-[30px] bg-transparent w-[90%] mx-auto">
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
        <div className="w-[90%] mx-auto flex flex-1 justify-center items-center">
          {/* main content of body */}
          <section className="flex items-center justify-center gap-[4vw] ">
            <article className="w-[531px] my-auto">
              <figure className="w-[309px] h-[300px] mx-auto">
                <Image
                  height={300}
                  width={309}
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
              className="w-[466px] bg-white rounded-2xl my-[50px]"
            >
              <Otp />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
