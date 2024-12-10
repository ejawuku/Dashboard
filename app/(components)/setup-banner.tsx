"use client";
import Image from "next/image";

const Setupbanner = () => {
  return (
    <div className="bg-bannercolor text-sm py-2.5">
      <div className="flex md:items-start items-start justify-start md:justify-center gap-2 pl-6">
        <Image
          src="/icons/danger.svg"
          alt="setupbanner"
          width={18}
          height={18}
        />
        <div className="text-bannertextcolor text-xs md:text-sm font-[600]">
          Finish setting up your business account
        </div>
        <button
          className="underline font-[600] text-xs md:text-sm text-bannetsetuptext"
          onClick={() => {
            console.log("Setup Account button clicked");
          }}
        >
          Setup Account
        </button>
        <div className="flex items-center gap-1 absolute right-4">
          <Image
            src="/icons/close.svg"
            alt="setupbanner"
            width={15}
            height={15}
          />
          <div className=" text-[#0C66E4] text-xs md:text-sm font-[300] hidden md:block">
            Maybe Later
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setupbanner;
