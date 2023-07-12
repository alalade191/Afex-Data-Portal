import Image from "next/image";
import React from "react";
import Link from "next/link";
import PersonalStepper from "@/views/modals/personal-stepper";

const HomepageBody: React.FC = () => {
  return (
    <section className="w-full pt-[60px] pb-[80px] flex flex-col items-center justify-center flex-1">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-6xl max-w-[460px]">
              Welcome to the{" "}
              <span className="text-[#252735] font-medium">
                Xpert Data Portal
              </span>
            </h2>
            <button
              style={{
                boxShadow: "0px 31px 34px 0px rgba(16, 39, 246, 0.20)",
              }}
              className="text-sm text-white bg-[#283A9D] rounded-lg py-[6px] px-[24px] font-medium mt-[60px]
             transition-transform duration-300 transform-gpu hover:scale-110 ease-in-out"
            >
              <Link href="/login">Sign in</Link>
            </button>
          </div>
          <div>
            <figure className="h-[400px] w-[500px]">
              <Image
                height={300}
                width={300}
                src={"/images/chat-support.png"}
                alt="chat"
                className="object-contain w-full h-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomepageBody;
