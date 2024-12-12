"use client";
import Image from "next/image";
import { useState } from "react";

interface SetupbannerProps {
  isbannerVisible?: boolean;
}

const Setupbanner = ({ isbannerVisible = true }: SetupbannerProps) => {
  const [isVisible, setIsVisible] = useState(isbannerVisible);

  const handleMaybeLaterClick = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="bg-bannercolor text-sm py-2.5">
      <div className="flex md:items-start items-start justify-start md:justify-center md:gap-2 gap-1 pl-6 relative">
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
        <button
          className="flex items-center gap-1 absolute right-4 top-1/2 -translate-y-1/2"
          onClick={handleMaybeLaterClick}
        >
          <Image
            src="/icons/close.svg"
            alt="setupbanner"
            width={15}
            height={15}
          />
          <div className="text-[#0C66E4] text-xs md:text-sm font-[300] hidden md:block">
            Maybe Later
          </div>
        </button>
      </div>
    </div>
  ) : null;
};

export default Setupbanner;
